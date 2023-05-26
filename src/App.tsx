import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Navbar } from "./components/navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router";
import { QueryClient, QueryClientProvider  } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { FavoriteProvider } from "./contexts/FavoritesContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <FavoriteProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Navbar />
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteProvider>
    </QueryClientProvider>
    </>
  );
}


export default App;
