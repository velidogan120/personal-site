import ReduxProvider from "./ReduxProvider";
import QueryProvider from "./QueryProvider";
import ToastProvider from "./ToastProvider";

const Providers = ({ children }) => {
  return (
    <div>
      <ToastProvider>
        <ReduxProvider>
          <QueryProvider>{children}</QueryProvider>
        </ReduxProvider>
      </ToastProvider>
    </div>
  );
};

export default Providers;
