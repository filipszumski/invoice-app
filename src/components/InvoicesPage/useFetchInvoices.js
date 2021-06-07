import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from "../../services/invoices";
import { getInvoicesDataSuccess } from "../../store/invoices/invoices";
import { getDataActive, setStatus } from "../../store/status/status";

export const useFetchInvoices = () => {
    const status = useSelector(state => state.status);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Fetch Invoices Effect");
        const fetchData = async () => {
            try {
                const response = await getInvoices();
                dispatch(getInvoicesDataSuccess(response));
                dispatch(getDataActive(false));
                dispatch(setStatus("success"));
            }
            catch (error) {
                console.error(error);
                dispatch(setStatus("error"));
            }
        };

        if (!status.getDataActive) {
            console.log("Fectch Invoices Effect RETURN");
            return;
        };

        fetchData();

    }, [status.getDataActive, dispatch])
};