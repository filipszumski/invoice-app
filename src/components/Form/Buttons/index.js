import { Button } from "../../Button";
import { Container } from "./styled";

export const Buttons = ({
    id,
    onCancelButtonClick,
    onDiscardChangesButtonClick,
    setIsValidation
}) => {
    return (
        id ?
            <>
                <Button
                    type="button"
                    onClick={onCancelButtonClick}
                    content={"Cancel"}
                    brigthBackground={true}
                    buttonStyle={"button2"}
                />
                <Button
                    type="submit"
                    onClick={() => setIsValidation(true)}
                    content={"Save Changes"} status={"pending"}
                    buttonStyle={"button1"}
                />
            </>
            :
            <>
                < Button
                    type="button"
                    onClick={onDiscardChangesButtonClick}
                    content={"Discard"}
                    brigthBackground={true}
                    buttonStyle={"button2"}
                />
                <Container>
                    <Button
                        type="submit"
                        onClick={() => setIsValidation(false)}
                        content={"Save as Draft"} status={"draft"}
                        brigthBackground={true}
                        buttonStyle={"button3"}
                    />
                    <Button
                        type="submit"
                        onClick={() => setIsValidation(true)}
                        content={"Save & Send"} status={"pending"}
                        buttonStyle={"button1"}
                    />
                </Container>
            </>


    )
};