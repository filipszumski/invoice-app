import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInvoices } from "./services/invoices";
import { getInvoicesDataSuccess } from "./store/invoices/invoices";
import { getInvoicesStatusError, getInvoicesStatusSuccess } from "./store/status/status";

export const useFetchInvoices = () => {
    const timeoutId = useRef(null);
    const dispatch = useDispatch();

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
};