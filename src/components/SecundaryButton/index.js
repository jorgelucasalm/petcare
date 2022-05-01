import { Button } from "./style";

function SecundaryButton ({children, color}) {
    return (
        <Button color={color} children={children}></Button>
    )
}

export default SecundaryButton;