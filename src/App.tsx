import "./App.css";
import { Pokedex } from "./Pages/pokedex/Pokedex";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Navbar } from "./components/navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router";
import { PokemonDetails } from "./Pages/pokemon-details/PokemonDetails";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes />
         </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
