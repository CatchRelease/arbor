import { ReactNode } from 'react';
import { ToastOptions as ReactToastifyToastOptions } from 'react-toastify';
export declare type ToastOptions = ReactToastifyToastOptions;
declare type ToastFunction = (message: ReactNode, details?: ReactNode, toastifyOptions?: ToastOptions) => void;
declare const toast: Record<"info" | "danger" | "success" | "warning", ToastFunction>;
export default toast;
