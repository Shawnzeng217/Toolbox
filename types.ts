export type ViewState = 'HOME' | 'DIGITAL_MEMORY';

export interface GeneratedImage {
  url: string;
  prompt: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}