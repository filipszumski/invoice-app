import React from "react";
import './App.css';

function App() {
  return (
    <>
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

      {/* <!-- No invoices --> */}
      <section>
        <h2>There is nothing here</h2>
        <p>Create an invoice by clicking the <strong>New Invoice</strong> button and get started</p>
      </section>
      {/* <!-- No invoices end --> */}

      {/* <!-- Create new invoice form --> */}



      {/* <button>Go Back</button> - mobile*/}
      <form action="https://postman-echo.com/post" method="POST">
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
      </form>

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
      <div>
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
        <p>
          <button>Cancel</button>
          <button>Delete</button>
        </p>
      </div>
    </>
  );
}

export default App;
