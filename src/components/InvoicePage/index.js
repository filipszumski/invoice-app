import React from "react";

export const InvoicePage = () => {

    return (
        <main>
            <button>Go Back</button>
            <section>
                <p>
                    <span>Status</span>
                    <span>Pending</span>
                </p>
                <p>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Mark as Paid</button>
                </p>
            </section>
            <section>
                <div>
                    <header>
                        <h2>#XM9141</h2>
                        <span>Graphic Designer</span>
                    </header>
                    <p>
                        <span>19 Union Terrace</span>
                        <span>London</span>
                        <span>E1 3EZ</span>
                        <span>United Kingdom</span>
                    </p>
                </div>
                <div>
                    <div>
                        <p>
                            <span>Invoice Date</span>
                            <span>21 AUG 2021</span>
                        </p>
                        <p>
                            <span>Invoice Date</span>
                            <span>21 AUG 2021</span>
                        </p>
                    </div>
                    <p>
                        <span>Bill To</span>
                        <span>Alex Grim</span>
                        <span>19 Union Terrace</span>
                        <span>London</span>
                        <span>E1 3EZ</span>
                        <span>United Kingdom</span>
                    </p>
                    <p>
                        <span>Sent To</span>
                        <span>alexgrim@mail.com</span>
                    </p>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>Item Name</span>
                            <span>Qty.</span>
                            <span>Price</span>
                            <span>Total</span>
                        </li>
                    </ul>
                    <p>
                        <span>Amount Due</span>
                        <span>$ 566.00</span>
                    </p>
                </div>
            </section>
        </main>
    )
}