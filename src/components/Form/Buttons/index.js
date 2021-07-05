import { Button } from "../../Button";

export const Buttons = ({
    id,
    onCancelButtonClick,
    onDiscardChangesButtonClick,
    setIsValidation
}) => {
    return (
        <section>
            {id ?
                <>
                    <Button type="button" onClick={onCancelButtonClick} content={"Cancel"} />
                    <Button type="submit" content={"Save Changes"} />
                </>
                :
                <>
                    < Button type="button" onClick={onDiscardChangesButtonClick} content={"Discard"} />
                    <div>
                        <Button type="submit" onClick={() => setIsValidation(false)} content={"Save as Draft"} status={"draft"} />
                        <Button type="submit" onClick={() => setIsValidation(true)} content={"Save & Send"} status={"pending"} />
                    </div>
                </>

            }
        </section>
    )
};