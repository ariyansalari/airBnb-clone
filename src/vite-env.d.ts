/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />
/// <reference types="./@types/svg" />

export declare global {
  function t(key: any, options?: any): any;
  interface Window {
    t: (key: any, options?: any) => any;
  }
}
