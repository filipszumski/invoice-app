import React from "react";
import { StyledForm } from "./styled";

export const Form = () => {

    return (
        // {/* <!-- Create new invoice form --> */ }
        //   {/* <button>Go Back</button> - mobile*/ }
        <StyledForm active={false} action="https://postman-echo.com/post" method="POST">
            <h2>New Invoice</h2>
            <section>
                <fieldset>
                    <legend>Bill From</legend>
                    <p>
                        <label for="sendersStreetAdress">Street Address</label>
                        <input id="sendersStreetAdress" name="sendersStreetAdress" type="text" />
                    </p>
                    <div>
                        <p>
                            <label for="sendersCity">City</label>
                            <input id="sendersCity" name="sendersCity" type="text" />
                        </p>
                        <p>
                            {/* pattern */}
                            <label for="sendersPostCode">Post Code</label>
                            <input id="sendersPostCode" name="sendersPostCode" type="text" />
                        </p>
                        <p>
                            <label for="sendersCountry">Country</label>
                            <input id="sendersCountry" name="sendersCountry" type="text" />
                        </p>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Bill To</legend>
                    <p>
                        <label for="clientsName">Client's Name</label>
                        <input id="clientsName" name="clientsName" type="text" />
                    </p>
                    <p>
                        <label for="clientsEmail">Client's Email</label>
                        <input id="clientsEmail" name="clientsEmail" type="email" />
                    </p>
                    <p>
                        <label for="clientsStreetAdress">Street Adress</label>
                        <input id="clientsStreetAdress" name="clientsStreetAdress" type="text" />
                    </p>
                    <div>
                        <p>
                            <label for="clientsCity">City</label>
                            <input id="clientsCity" name="clientsCity" type="text" />
                        </p>
                        <p>
                            {/* pattern */}
                            <label for="clientsPostCode">Post Code</label>
                            <input id="clientsPostCode" name="clientsPostCode" type="text" />
                        </p>
                        <p>
                            <label for="clientsCountry">Country</label>
                            <input id="clientsCountry" name="clientsCountry" type="text" />
                        </p>
                    </div>
                </fieldset>

                <div>
                    <p>
                        <label for="invoiceDate">Invoice Date</label>
                        <input id="invoiceDate" name="invoiceDate" type="date" />
                    </p>
                    <p>
                        <label for="paymentTerms">Payment Terms</label>
                        <select id="paymentTerms" name="paymentTerms">
                            <option>Net 1 day</option>
                            <option>Net 7 days</option>
                            <option>Net 14 days</option>
                            <option>Net 30 days</option>
                        </select>
                    </p>
                </div>
                <p>
                    <label for="projectDescription">Project Description</label>
                    <input id="projectDescription" name="projectDescription" type="text" />
                </p>
            </section>

            <section>
                <h3>Item List</h3>
                <ul>
                    <li>
                        <span>Item Name</span>
                        <span>Qty.</span>
                        <span>Price</span>
                        <span>Total</span>
                    </li>
                    {/* generate elements */}
                </ul>
                <button>Add New Item</button>
            </section>

            <section>
                <button>Discard</button>
                <div>
                    <button> Save as Draft</button>
                    <button>Save & Send</button>
                </div>
            </section>
        </StyledForm>
    )
}