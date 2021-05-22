import React from "react";

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
                            <option selected disabled hidden>Filter by status</option>
                        </select>
                        <div>
                            <p>
                                <label for="draft">Draft</label>
                                <input id="draft" type="checkbox" name="draft" />
                            </p>
                            <p>
                                <label for="prending">Pending</label>
                                <input id="prending" type="checkbox" name="prending" />
                            </p>
                            <p>
                                <label for="paid">Paid</label>
                                <input id="paid" type="checkbox" name="paid" />
                            </p>
                        </div>
                    </div>
                    <button>New Invoice</button>
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