import React from "react";
import { InvoicesPage } from "./components/InvoicesPage";
import { Form } from "./components/Form";
import { InvoicePage } from "./components/InvoicePage";
import { DeleteInvoiceWindow } from "./components/DeleteInvoiceWindow";
import { Overlay } from "./components/Overlay/styled";

function App() {
  return (
    <>
      <Overlay active={false} />
      <InvoicesPage />
      <Form />
      <InvoicePage />
      <DeleteInvoiceWindow />
    </>
  );
}

export default App;
