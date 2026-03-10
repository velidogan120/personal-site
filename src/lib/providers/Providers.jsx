import ReduxProvider from "./ReduxProvider";

const Providers = ({ children }) => {
  return (
    <div>
      <ReduxProvider>{children}</ReduxProvider>
    </div>
  );
};

export default Providers;
