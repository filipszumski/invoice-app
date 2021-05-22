import React from "react";
import { InvoicesPage } from "./components/InvoicesPage";
import { Form } from "./components/Form";
import { InvoicePage } from "./components/InvoicePage";
import { DeleteInvoiceWindow } from "./components/DeleteInvoiceWindow";
import './App.css';

function App() {
  return (
    <>
      <InvoicesPage />
      <Form />
      <InvoicePage />
      <DeleteInvoiceWindow />
    </>
  );
}

export default App;
