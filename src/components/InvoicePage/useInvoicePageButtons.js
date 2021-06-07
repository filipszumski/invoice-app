import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toInvoices } from "../../routes";
import { deleteInvoice, patchInvoice } from "../../services/invoices";
import { updateInvoiceDataSuccess } from "../../store/invoice/invoice";
import { displayForm, displayDeleteInvoiceAlert, setStatus } from "../../store/status/status";

export const useInvoicePageButtons = (params, invoice) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onEditButtonClick = () => dispatch(displayForm(true));

    const onGoBackButtonClick = () => dispatch(setStatus("loading"));

    const onDeleteButtonClick = (active) => dispatch(displayDeleteInvoiceAlert(active));

    const onDeleteInvoiceButtonClick = async () => {
        try {
            dispatch(setStatus("loading"));
            dispatch(displayDeleteInvoiceAlert(false));
            await deleteInvoice(params.id);
            history.push(toInvoices());
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
        }
    };

    const markAsPaid = async () => {
        try {
            dispatch(setStatus("loading"));
            const response = await patchInvoice(params.id, {
                ...invoice,
                status: "paid",
            });
            dispatch(updateInvoiceDataSuccess(response));
            dispatch(setStatus("success"));
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
        }
    };

    return [onEditButtonClick, onGoBackButtonClick, onDeleteButtonClick, onDeleteInvoiceButtonClick, markAsPaid];
}