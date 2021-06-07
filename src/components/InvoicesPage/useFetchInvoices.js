import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInvoices } from "../../services/invoices";
import { getInvoicesDataSuccess } from "../../store/invoices/invoices";
import { setStatus } from "../../store/status/status";

export const useFetchInvoices = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getInvoices();
                dispatch(getInvoicesDataSuccess(response));
                dispatch(setStatus("success"));
            }
            catch (error) {
                console.error(error);
                dispatch(setStatus("error"));
            }
        };
        fetchData();
    }, [dispatch])
};