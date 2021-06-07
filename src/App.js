import React from "react";
import { useSelector } from "react-redux";
import { InvoicesPage } from "./components/InvoicesPage";
import { InvoicePage } from "./components/InvoicePage";
import { Overlay } from "./components/Overlay/styled";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toInvoice, toInvoices } from "./shared/routes";

function App() {
  const status = useSelector(state => state.status);

  return (
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
  );
}

export default App;
