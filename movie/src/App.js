import './App.css';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import SearchMovies from "./searchMovies.js"
import Toggle from './Toggle';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Toggle/>
      </ColorModeProvider>
    </ThemeProvider>
      <SearchMovies/>
    </>
  );
}

export default App;
