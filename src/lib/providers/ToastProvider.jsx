import { ToastContainer } from "react-toastify";

const ToastProvider = ({ children }) => {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
};

export default ToastProvider;
