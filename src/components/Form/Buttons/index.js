import { Button } from "../../Button";

export const Buttons = ({ id, onSubmitButtonClick }) => {

    return (
        <section>
            {id ?
                <>
                    <Button type="button" onClick={(e) => onSubmitButtonClick(e)} content={"Cancel"} />
                    <Button type="button" onClick={(e) => onSubmitButtonClick(e)} content={"Save Changes"} />
                </>
                :
                <>
                    < Button onClick={(e) => onSubmitButtonClick(e)} type="button" content={"Discard"} />
                    <div>
                        <Button type="button" onClick={(e) => onSubmitButtonClick(e, "draft")} content={"Save as Draft"} />
                        <Button type="button" onClick={(e) => onSubmitButtonClick(e, "pending")} content={"Save & Send"} />
                    </div>
                </>

            }
        </section>
    )
};