import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { IntlProvider } from "react-intl";

const queryClient = new QueryClient();

function App() {
  return (
    <IntlProvider locale="pt-br">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="App">
            <Router />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default App;
