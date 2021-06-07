import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toInvoices } from "../../routes";
import { deleteInvoice, patchInvoice } from "../../services/invoices";
import { displayForm, displayDeleteInvoiceAlert, setStatus, getDataActive } from "../../store/status/status";

export const useInvoicePageButtons = (params, invoice) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onEditButtonClick = () => dispatch(displayForm(true));

    const onGoBackButtonClick = () => {
        dispatch(setStatus("loading"));
        dispatch(getDataActive(true));
    };

    const onDeleteButtonClick = (active) => dispatch(displayDeleteInvoiceAlert(active));

    const onDeleteInvoiceButtonClick = async () => {
        try {
            dispatch(setStatus("loading"));
            await deleteInvoice(params.id);
            dispatch(displayDeleteInvoiceAlert(false));
            history.push(toInvoices());
            dispatch(getDataActive(true));
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
        }
    };

    const markAsPaid = async () => {
        try {
            dispatch(setStatus("loading"));
            await patchInvoice(params.id, {
                ...invoice,
                status: "paid",
            });
            dispatch(getDataActive(true));
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
        }
    };

    return [onEditButtonClick, onGoBackButtonClick, onDeleteButtonClick, onDeleteInvoiceButtonClick, markAsPaid];
}