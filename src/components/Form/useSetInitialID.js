import { useEffect } from "react";

export const useSetInitialID = (invoice, setInvoice) => {
    const getRandomLetter = () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    };

    const getRandomNumber = () => Math.floor(Math.random() * 10).toString();

    useEffect(() => {
        console.log("ID UPDATE EFFECT TURNED");
        setInvoice(invoice => {
            return {
                ...invoice,
                id: `${getRandomLetter()}${getRandomLetter()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`

            }
        })
        // try to figure out why useEffect want setInvoice and if it is danger for state managment
    }, [setInvoice])
};