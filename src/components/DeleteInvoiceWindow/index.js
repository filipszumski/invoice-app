import React from "react";

export const DeleteInvoiceWindow = () => {

    return (
        <div>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
            <p>
                <button>Cancel</button>
                <button>Delete</button>
            </p>
        </div>
    )
}