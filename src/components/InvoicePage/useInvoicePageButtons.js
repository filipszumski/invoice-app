import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toInvoices } from "../../routes";
import { deleteInvoice, patchInvoice } from "../../services/invoices";
import { displayForm, displayDeleteInvoiceAlert, setStatus } from "../../store/status/status";

export const useInvoicePageButtons = (params, invoice) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onEditButtonClick = () => dispatch(displayForm(true))

    const onGoBackButtonClick = () => history.goBack();

    const onDeleteButtonClick = (active) => dispatch(displayDeleteInvoiceAlert(active));

    const onDeleteInvoiceButtonClick = async () => {
        try {
            dispatch(setStatus("loading"));
            dispatch(displayDeleteInvoiceAlert(false));
            history.push(toInvoices());
            await deleteInvoice(params.id);
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
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
        }
    };

    return [onEditButtonClick, onGoBackButtonClick, onDeleteButtonClick, onDeleteInvoiceButtonClick, markAsPaid];
}