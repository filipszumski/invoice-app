import { format } from "date-fns";
import addDays from 'date-fns/addDays'
import { displayForm, getInvoicesActive, setStatus } from "../../store/status/status";
import { postInvoice, patchInvoice } from "../../services/invoices";
import { useDispatch } from "react-redux";

export const useFormButtons = (invoice, id) => {
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
            await postInvoice({
                ...invoice,
                status: status,
                paymentDue: setPaymentDue(),
                id: setInvoiceID(),
                total: setInvoiceTotal(),
            });
            dispatch(getInvoicesActive(true));
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
            await patchInvoice(id, {
                ...invoice,
                total: setInvoiceTotal(),
                paymentDue: setPaymentDue(),
            });
            dispatch(getInvoicesActive(true));
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
            dispatch(displayForm(false));
        }
    };

    const onCloseFormButtonClick = () => dispatch(displayForm(false));

    return [onSubmitInvoiceButtonClick, onSubmitInvoiceUpdateButtonClick, onCloseFormButtonClick];
}