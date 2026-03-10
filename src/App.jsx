import "./App.css";
import Main from "./layouts/Main";
import Providers from "./lib/providers/Providers";
function App() {
  return (
    <>
      <Providers>
        <Main />
      </Providers>
    </>
  );
}

export default App;
