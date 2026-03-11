import ReduxProvider from "./ReduxProvider";
import QueryProvider from "./QueryProvider";

const Providers = ({ children }) => {
  return (
    <div>
      <ReduxProvider>
        <QueryProvider>{children}</QueryProvider>
      </ReduxProvider>
    </div>
  );
};

export default Providers;
