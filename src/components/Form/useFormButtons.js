import { format } from "date-fns";
import addDays from 'date-fns/addDays'
import { useDispatch } from "react-redux";
import { displayForm, setStatus } from "../../store/status/status";
import { postInvoice, patchInvoice } from "../../services/invoices";
import { addInvoiceDataSuccess } from "../../store/invoices/invoices";
import { updateInvoiceDataSuccess } from "../../store/invoice/invoice";
import { CLEAR_FORM } from "./stateActionsConsts";

export const useFormButtons = (invoice, id, formStateDispatch, initialState) => {
    const dispatch = useDispatch();

    const setPaymentDue = () => {
        const createdAtDateArray = invoice.createdAt.split("-");
        const paymentDueDate = addDays(new Date(parseInt(createdAtDateArray[0], 10), parseInt(createdAtDateArray[1] - 1, 10), parseInt(createdAtDateArray[2], 10)), invoice.paymentTerms);

        if (!invoice.createdAt) {
            return "";
        }
        return format(paymentDueDate, "yyyy-MM-dd");
    };

    const setInvoiceID = () => {
        const getRandomNumber = () => {
            const randomNumber = Math.floor(Math.random() * 10);
            return randomNumber.toString();
        };

        const getRandomLetter = () => {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return alphabet[Math.floor(Math.random() * alphabet.length)];
        };

        return `${getRandomLetter()}${getRandomLetter()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`
    };

    const setInvoiceTotal = () => {
        const itemListTotalArray = invoice.items.map(item => item.total);
        let sum = 0;

        for (let i = 0; i < itemListTotalArray.length; i++) {
            sum += itemListTotalArray[i];
        }

        return sum;
    };

    const onSubmitInvoiceButtonClick = async (status) => {
        try {
            dispatch(setStatus("loading"));
            dispatch(displayForm(false));
            const response = await postInvoice({
                ...invoice,
                status: status,
                paymentDue: setPaymentDue(),
                id: setInvoiceID(),
                total: setInvoiceTotal(),
            });
            dispatch(addInvoiceDataSuccess(response));
            formStateDispatch({ type: CLEAR_FORM, payload: initialState });
            dispatch(setStatus("success"));
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
            dispatch(displayForm(false));
        }
    };

    const onSubmitInvoiceUpdateButtonClick = async () => {
        try {
            dispatch(setStatus("loading"));
            dispatch(displayForm(false));
            const response = await patchInvoice(id, {
                ...invoice,
                total: setInvoiceTotal(),
                paymentDue: setPaymentDue(),
            });
            dispatch(updateInvoiceDataSuccess(response));
            dispatch(setStatus("success"));
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
            dispatch(displayForm(false));
        }
    };

    const onCloseFormButtonClick = () => dispatch(displayForm(false));

    return [onSubmitInvoiceButtonClick, onSubmitInvoiceUpdateButtonClick, onCloseFormButtonClick];
}