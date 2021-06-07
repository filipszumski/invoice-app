import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getInvoice } from "../../services/invoices";
import { getInvoiceDataSuccess } from "../../store/invoice/invoice";
import { setStatus } from "../../store/status/status";

export const useFetchInvoice = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getInvoice(params.id);
                dispatch(getInvoiceDataSuccess(response));
                dispatch(setStatus("success"));
            }
            catch (error) {
                console.error(error);
                dispatch(setStatus("error"));
            }
        };
        fetchData();
    }, [dispatch, params.id])
};