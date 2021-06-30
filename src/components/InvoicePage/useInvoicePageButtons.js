import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toInvoices } from "../../shared/routes";
import { deleteInvoice, patchInvoice } from "../../services/invoices";
import { displayForm, displayDeleteInvoiceAlert, setStatus } from "../../store/status/status";
import * as statusStage from "../../shared/consts/stages";
import { paidStatus } from "./consts";

export const useInvoicePageButtons = (params, invoice) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onEditButtonClick = () => dispatch(displayForm(true));

    const onGoBackButtonClick = () => dispatch(setStatus(statusStage.loading));

    const onDeleteButtonClick = (active) => dispatch(displayDeleteInvoiceAlert(active));

    const onDeleteInvoiceButtonClick = async () => {
        try {
            await deleteInvoice(params.id);
            history.push(toInvoices());
            dispatch(setStatus(statusStage.loading));
            dispatch(displayDeleteInvoiceAlert(false));
        } catch (error) {
            console.error(error);
            dispatch(setStatus(statusStage.error));
        }
    };

    const markAsPaid = async () => {
        try {
            await patchInvoice(params.id, {
                ...invoice,
                status: paidStatus,
            });
            dispatch(setStatus(statusStage.loading));
        } catch (error) {
            console.error(error);
            dispatch(setStatus(statusStage.error));
        }
    };

    return [onEditButtonClick, onGoBackButtonClick, onDeleteButtonClick, onDeleteInvoiceButtonClick, markAsPaid];
}