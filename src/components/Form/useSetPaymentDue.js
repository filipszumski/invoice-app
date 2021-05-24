import { useEffect } from "react";
import { format } from "date-fns";
import addDays from 'date-fns/addDays'

export const useSetPaymentDue = (invoice, setInvoice) => {
    useEffect(() => {
        console.log("TRIED TO SET PAYMENT DUE");
        const createdAtDateArray = invoice.createdAt.split("-");
        const paymentDueDate = addDays(new Date(parseInt(createdAtDateArray[0], 10), parseInt(createdAtDateArray[1] - 1, 10), parseInt(createdAtDateArray[2], 10)), invoice.paymentTerms);

        setInvoice(invoice => {
            if (invoice.createdAt === "") {
                return {
                    ...invoice
                }
            }
            return {
                ...invoice,
                paymentDue: format(paymentDueDate, "yyyy-MM-dd")
            }
        })
        // try to figure out why useEffect want setInvoice and if it is danger for state managment
    }, [invoice.createdAt, invoice.paymentTerms, setInvoice]);
};