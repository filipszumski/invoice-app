import axios from "axios"

export const getInvoices = async () => {
    const response = await axios.get("http://localhost:3333/invoices");
    return response.data;
};

export const getInvoice = async (id) => {
    const response = await axios.get(`http://localhost:3333/invoices/${id}`);
    return response.data;
};

export const deleteInvoice = async (id) => {
    await axios.delete(`http://localhost:3333/invoices/${id}`);
};

export const patchInvoice = async (id, invoice) => {
    await axios.patch(`http://localhost:3333/invoices/${id}`, invoice);
};

export const postInvoice = async (invoice) => {
    await axios.post("http://localhost:3333/invoices", invoice);
};