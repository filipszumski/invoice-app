import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InvoicesPage } from "./components/InvoicesPage";
import { Form } from "./components/Form";
import { InvoicePage } from "./components/InvoicePage";
import { DeleteInvoiceWindow } from "./components/DeleteInvoiceWindow";
import { Overlay } from "./components/Overlay/styled";
import { getInvoices } from "./services/invoices";
import { getInvoicesDataSuccess } from "./store/invoices/invoices";
import { getInvoicesStatusError, getInvoicesStatusSuccess } from "./store/status/status";

function App() {
  const dispatch = useDispatch();
  const status = useSelector(state => state.status);
  const timeoutId = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getInvoices();
        dispatch(getInvoicesDataSuccess(response))
        dispatch(getInvoicesStatusSuccess());
      }
      catch (error) {
        console.error(error);
        dispatch(getInvoicesStatusError())
      }
    };

    timeoutId.current = setTimeout(fetchData, 1000);

    return () => clearTimeout(timeoutId.current);
  }, [])

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
