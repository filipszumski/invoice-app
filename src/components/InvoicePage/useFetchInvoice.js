import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getInvoice } from "../../services/invoices";
import { getInvoiceDataSuccess } from "../../store/invoice/invoice";
import { setStatus } from "../../store/status/status";
import * as statusStage from "../../shared/consts/stages";

export const useFetchInvoice = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const status = useSelector(state => state.status);

    useEffect(() => {
        if (status.stage !== "loading") {
            return;
        };

        const fetchData = async () => {
            try {
                const response = await getInvoice(params.id);
                dispatch(getInvoiceDataSuccess(response));
                dispatch(setStatus(statusStage.success));
            }
            catch (error) {
                console.error(error);
                dispatch(setStatus(statusStage.error));
            }
        };
        fetchData();
    }, [dispatch, params.id, status.stage])
};