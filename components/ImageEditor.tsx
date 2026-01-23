import React, { useState, useRef, useCallback } from 'react';
import { editImageWithGemini } from '../services/geminiService';
import { LoadingState } from '../types';

const ImageEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResultImage(null);
        setStatus(LoadingState.IDLE);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = useCallback(async () => {
    if (!image || !prompt.trim()) return;

    setStatus(LoadingState.LOADING);
    try {
      const editedImageBase64 = await editImageWithGemini(image, prompt);
      setResultImage(editedImageBase64);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  }, [image, prompt]);

  return (
    <div className="flex flex-col h-full px-6 pt-4 pb-32 animate-fade-in">
        <div className="bg-hilton-off-white rounded-xl p-6 shadow-premium mb-6">
            <h2 className="text-hilton-blue text-xl font-serif font-bold mb-2">Digital Memory</h2>
            <p className="text-gray-600 text-sm mb-6">
                Enhance your stay memories with AI. Upload a photo and tell us how to make it perfect.
            </p>

            {/* Upload Area */}
            {!image ? (
                <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-primary/30 rounded-lg h-48 flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-primary/5 transition-colors group"
                >
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-primary">add_a_photo</span>
                    </div>
                    <span className="text-primary font-medium text-sm">Tap to upload photo</span>
                </div>
            ) : (
                <div className="space-y-4">
                     <div className="relative rounded-lg overflow-hidden shadow-md bg-black/5">
                        <img 
                            src={resultImage || image} 
                            alt="Preview" 
                            className="w-full h-auto max-h-[400px] object-contain mx-auto"
                        />
                         {status === LoadingState.LOADING && (
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                                <span className="material-symbols-outlined animate-spin text-4xl mb-2">refresh</span>
                                <span className="text-sm font-medium">Magic in progress...</span>
                            </div>
                         )}
                         {resultImage && (
                             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                                 <span className="material-symbols-outlined text-sm">check</span> Edited
                             </div>
                         )}
                    </div>

                    {resultImage ? (
                        <button
                            onClick={() => {
                                setImage(null);
                                setResultImage(null);
                                setPrompt('');
                            }}
                             className="w-full py-3 bg-hilton-blue text-white rounded-lg font-medium shadow-lg hover:bg-[#003d7a] transition-colors flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">restart_alt</span>
                            Start Over
                        </button>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="E.g., Make it look like a vintage postcard, or remove the background people..."
                                className="w-full rounded-lg border-gray-200 bg-white p-3 text-sm focus:border-primary focus:ring-primary text-gray-800 resize-none h-24"
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        setImage(null);
                                        setPrompt('');
                                    }}
                                    className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={handleEdit}
                                    disabled={!prompt.trim() || status === LoadingState.LOADING}
                                    className="flex-[2] py-3 bg-primary text-white rounded-lg font-medium shadow-lg hover:bg-[#005f7a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">auto_awesome</span>
                                    Magic Edit
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange}
            />
        </div>
    </div>
  );
};

export default ImageEditor;