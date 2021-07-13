import React from "react";
import { useSelector } from "react-redux";
import { InvoicesPage } from "./components/InvoicesPage";
import { InvoicePage } from "./components/InvoicePage";
import { Overlay } from "./components/common/Overlay/styled";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toInvoice, toInvoices } from "./shared/routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from './GlobalStyle';

function App() {
  const status = useSelector(state => state.status);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Overlay active={status.overlayActive} />
        <Switch>
          <Route path={toInvoice()}>
            <InvoicePage />
          </Route>
          <Route path={toInvoices()}>
            <InvoicesPage />
          </Route>
          <Route path="/">
            <Redirect to={toInvoices()} />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
