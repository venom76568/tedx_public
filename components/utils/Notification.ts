import { toast, TypeOptions } from "react-toastify";

export const Toast = ({ msg, type }: { msg: string, type: TypeOptions }) =>
  toast(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    type: type
  });