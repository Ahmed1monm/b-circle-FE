import Navbar from "./components/Navbar";
import { ThemeProvider } from "./theme-provider";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
