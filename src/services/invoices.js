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
    const response = await axios.delete(`http://localhost:3333/invoices/${id}`);
    console.log(response);
    return response.data;
};

export const postInvoice = async (invoice) => {
    const response = await axios.post("http://localhost:3333/invoices", invoice);
    return response.data;
};