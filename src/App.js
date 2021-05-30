import React from "react";
import { useSelector } from "react-redux";
import { InvoicesPage } from "./components/InvoicesPage";
import { Form } from "./components/Form";
import { InvoicePage } from "./components/InvoicePage";
import { DeleteInvoiceWindow } from "./components/DeleteInvoiceWindow";
import { Overlay } from "./components/Overlay/styled";
import { useFetchInvoices } from "./useFetchInvoices";


function App() {
  useFetchInvoices();
  const status = useSelector(state => state.status);


  return (
    <>
      <Overlay active={status.overlayActive} />
      <InvoicesPage />
      <Form />
      <InvoicePage />
      <DeleteInvoiceWindow />
    </>
  );
}

export default App;
