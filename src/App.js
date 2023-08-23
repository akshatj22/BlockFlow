import Night from "../src/Pages/Night/night"
import { ThemeContextProvider } from "./ThemeContext";
function App() {

  return (
    <ThemeContextProvider>
      <div>
        <Night />
      </div>
    </ThemeContextProvider>
  );
}

export default App;



