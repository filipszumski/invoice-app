import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toInvoices } from "../../shared/routes";
import { deleteInvoice, patchInvoice } from "../../services/invoices";
import { updateInvoiceDataSuccess } from "../../store/invoice/invoice";
import { displayForm, displayDeleteInvoiceAlert, setStatus } from "../../store/status/status";
import * as statusStage from "../../shared/consts/stages";

export const useInvoicePageButtons = (params, invoice) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onEditButtonClick = () => dispatch(displayForm(true));

    const onGoBackButtonClick = () => dispatch(setStatus(statusStage.loading));

    const onDeleteButtonClick = (active) => dispatch(displayDeleteInvoiceAlert(active));

    const onDeleteInvoiceButtonClick = async () => {
        try {
            dispatch(setStatus(statusStage.loading));
            dispatch(displayDeleteInvoiceAlert(false));
            await deleteInvoice(params.id);
            history.push(toInvoices());
        } catch (error) {
            console.error(error);
            dispatch(setStatus(statusStage.error));
        }
    };

    const markAsPaid = async () => {
        try {
            dispatch(setStatus(statusStage.loading));
            const response = await patchInvoice(params.id, {
                ...invoice,
                status: "paid",
            });
            dispatch(updateInvoiceDataSuccess(response));
            dispatch(setStatus(statusStage.success));
        } catch (error) {
            console.error(error);
            dispatch(setStatus(statusStage.error));
        }
    };

    return [onEditButtonClick, onGoBackButtonClick, onDeleteButtonClick, onDeleteInvoiceButtonClick, markAsPaid];
}