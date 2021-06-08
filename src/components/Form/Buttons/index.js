import { Button } from "../../Button";

export const Buttons = ({ id, onSubmitInvoiceButtonClick, onSubmitInvoiceUpdateButtonClick, onCloseFormButtonClick }) => {

    return (
        <section>
            {id ?
                <>
                    <Button type="button" onClick={onCloseFormButtonClick} content={"Cancel"} />
                    <Button type="button" onClick={onSubmitInvoiceUpdateButtonClick} content={"Save Changes"} />
                </>
                :
                <>
                    < Button onClick={onCloseFormButtonClick} type="button" content={"Discard"} />
                    <div>
                        <Button type="button" onClick={() => onSubmitInvoiceButtonClick("draft")} content={"Save as Draft"} />
                        <Button type="button" onClick={() => onSubmitInvoiceButtonClick("pending")} content={"Save & Send"} />
                    </div>
                </>

            }
        </section>
    )
};