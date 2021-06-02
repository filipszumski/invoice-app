import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from "./services/invoices";
import { getInvoicesDataSuccess } from "./store/invoices/invoices";
import { setStatus } from "./store/status/status";

export const useFetchInvoices = () => {
    const timeoutId = useRef(null);
    const status = useSelector(state => state.status);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Fetch Invoices Effect");
        const fetchData = async () => {
            try {
                const response = await getInvoices();
                dispatch(getInvoicesDataSuccess(response))
                dispatch(setStatus("success"));
            }
            catch (error) {
                console.error(error);
                dispatch(setStatus("error"))
            }
        };

        if (status.status !== "loading") {
            console.log("Fectch Invoice Effect Return");
            return;
        }

        timeoutId.current = setTimeout(fetchData, 1000);
        console.log("Fectch Invoice Effect DONE");

        return () => clearTimeout(timeoutId.current);
    }, [status.status])
};