import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Navbar } from "./components/navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router";
import { QueryClient, QueryClientProvider  } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes />
         </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
