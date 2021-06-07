import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInvoices } from "../../services/invoices";
import { getInvoicesDataSuccess } from "../../store/invoices/invoices";
import { setStatus } from "../../store/status/status";
import * as statusStage from "../../shared/consts/stages";

export const useFetchInvoices = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getInvoices();
                dispatch(getInvoicesDataSuccess(response));
                dispatch(setStatus(statusStage.success));
            }
            catch (error) {
                console.error(error);
                dispatch(setStatus(statusStage.error));
            }
        };
        fetchData();
    }, [dispatch])
};