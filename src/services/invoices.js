import axios from "axios"

export const getInvoices = async () => {
    const response = await axios.get("http://localhost:3333/invoices");
    return response.data;
}