import React from "react";
import { Button } from "../Button";

export const InvoicesPage = () => {

    return (
        <main>
            <header>
                <div>
                    <h1>Invoices</h1>
                    <p>There are 7 total invoices</p>
                    {/* or no incove text */}
                </div>
                <div>
                    <div>
                        <select>
                            <option disabled hidden>Filter by status</option>
                        </select>
                        <div>
                            <p>
                                <label htmlFor="draft">Draft</label>
                                <input id="draft" type="checkbox" name="draft" />
                            </p>
                            <p>
                                <label htmlFor="prending">Pending</label>
                                <input id="prending" type="checkbox" name="prending" />
                            </p>
                            <p>
                                <label htmlFor="paid">Paid</label>
                                <input id="paid" type="checkbox" name="paid" />
                            </p>
                        </div>
                    </div>
                    {/* add + image */}
                    <Button content="New Invoice" extraContent="+" />
                </div>
            </header>

            {/*   No invoices  */}
            <section>
                <h2>There is nothing here</h2>
                <p>Create an invoice by clicking the <strong>New Invoice</strong> button and get started</p>
            </section>
            {/* <!-- No invoices end --> */}
            {/* or invoices List */}
        </main>
    )
}