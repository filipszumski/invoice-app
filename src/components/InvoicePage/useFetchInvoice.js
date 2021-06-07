import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getInvoice } from "../../services/invoices";
import { getInvoiceDataSuccess } from "../../store/invoice/invoice";
import { getDataActive, setStatus } from "../../store/status/status";

export const useFetchInvoice = () => {
    const status = useSelector(state => state.status);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Fetch Invoices by ID Effect");
        const fetchData = async () => {
            try {
                const response = await getInvoice(params.id);
                dispatch(getInvoiceDataSuccess(response));
                dispatch(getDataActive(false));
                dispatch(setStatus("success"));
            }
            catch (error) {
                console.error(error);
                dispatch(setStatus("error"));
            }
        };

        if (!status.getDataActive) {
            console.log("Fectch Invoice by ID Effect RETURN");
            return;
        };

        fetchData();

    }, [status.getDataActive, dispatch])
};