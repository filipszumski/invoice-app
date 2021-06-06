import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from "./services/invoices";
import { getInvoicesDataSuccess } from "./store/invoices/invoices";
import { setStatus, getInvoicesActive } from "./store/status/status";

export const useFetchInvoices = () => {
    const status = useSelector(state => state.status);
    const dispatch = useDispatch();
    // wynieść staty do globalnych zmiennych
    useEffect(() => {
        console.log("Fetch Invoices Effect");
        const fetchData = async () => {
            try {
                const response = await getInvoices();
                dispatch(getInvoicesDataSuccess(response));
                dispatch(setStatus("success"));
                dispatch(getInvoicesActive(false));
            }
            catch (error) {
                console.error(error);
                dispatch(setStatus("error"));
            }
        };

        if (!status.getInvoicesActive) {
            console.log("Fectch Invoice Effect RETURN");
            return;
        }

        fetchData();

    }, [status.getInvoicesActive])
};