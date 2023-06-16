import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import store from "./store";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <IntlProvider locale="pt-br">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="App">
              <Router />
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </IntlProvider>
    </Provider>
  );
}

export default App;
