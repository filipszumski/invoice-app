import { format } from "date-fns";
import addDays from 'date-fns/addDays'
import { useDispatch } from "react-redux";
import { displayForm, setStatus } from "../../store/status/status";
import { postInvoice, patchInvoice } from "../../services/invoices";
import { CLEAR_FORM, REPLACE_STATE } from "./consts";
import * as statusStage from "../../shared/consts/stages";

export const useFormButtons = (invoice, id, formStateDispatch, initialState, fetchedInvoiceState) => {
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
        const itemsList = invoice.items;

        if (!itemsList.length) {
            return "";
        }

        const itemListTotalArray = itemsList.map(item => item.total);
        let sum = 0;

        for (let i = 0; i < itemListTotalArray.length; i++) {
            sum += itemListTotalArray[i];
        }

        return sum;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const status = e.nativeEvent.submitter.dataset.status;

        if (id) {
            try {
                await patchInvoice(id, {
                    ...invoice,
                    status: status,
                    total: setInvoiceTotal(),
                    paymentDue: setPaymentDue(),
                });
                dispatch(setStatus(statusStage.loading));
                dispatch(displayForm(false));
            } catch (error) {
                console.error(error);
                dispatch(setStatus(statusStage.error));
                dispatch(displayForm(false));
            }
        } else {
            try {
                await postInvoice({
                    ...invoice,
                    status: status,
                    paymentDue: setPaymentDue(),
                    id: setInvoiceID(),
                    total: setInvoiceTotal(),
                });
                dispatch(setStatus(statusStage.loading));
                dispatch(displayForm(false));
                formStateDispatch({ type: CLEAR_FORM, payload: initialState });
            } catch (error) {
                console.error(error);
                dispatch(setStatus(statusStage.error));
                dispatch(displayForm(false));
            }
        }
    };

    const onCancelButtonClick = () => {
        dispatch(displayForm(false));
        formStateDispatch({ type: REPLACE_STATE, payload: fetchedInvoiceState })
    };

    const onDiscardChangesButtonClick = () => {
        dispatch(displayForm(false));
        formStateDispatch({ type: CLEAR_FORM, payload: initialState });
    };

    return [handleSubmit, onCancelButtonClick, onDiscardChangesButtonClick];
}