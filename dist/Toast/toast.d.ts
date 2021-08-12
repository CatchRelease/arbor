import { ReactNode } from 'react';
import { ToastOptions } from 'react-toastify';
declare type ToastFunction = (message: ReactNode, details?: ReactNode, toastifyOptions?: ToastOptions) => void;
declare const toast: Record<"info" | "danger" | "success" | "warning", ToastFunction>;
export default toast;
