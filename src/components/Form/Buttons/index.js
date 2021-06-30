import { Button } from "../../Button";

export const Buttons = ({
    id,
    onSubmitInvoiceButtonClick,
    onSubmitInvoiceUpdateButtonClick,
    onCancelButtonClick,
    onDiscardChangesButtonClick
}) => {
    return (
        <section>
            {id ?
                <>
                    <Button type="button" onClick={onCancelButtonClick} content={"Cancel"} />
                    <Button type="button" onClick={onSubmitInvoiceUpdateButtonClick} content={"Save Changes"} />
                </>
                :
                <>
                    < Button onClick={onDiscardChangesButtonClick} type="button" content={"Discard"} />
                    <div>
                        <Button type="button" onClick={() => onSubmitInvoiceButtonClick("draft")} content={"Save as Draft"} />
                        <Button type="button" onClick={() => onSubmitInvoiceButtonClick("pending")} content={"Save & Send"} />
                    </div>
                </>

            }
        </section>
    )
};