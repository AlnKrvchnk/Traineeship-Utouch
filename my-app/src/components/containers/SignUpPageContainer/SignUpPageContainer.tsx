import { StyledForm, StyledPage } from "../AuthContainer/StyledAuthPage";
import SignUpForm from "../../organisms/SignUpForm/SignUpForm";
import Nav from "../../molecules/Nav/Nav";

import { authPage } from "../../../routes/Paths";

const SignUpPageContainer =()=>{
    return(
        <StyledPage>
            <StyledForm>
            <Nav links={authPage}/>
            <SignUpForm />
            </StyledForm>
        </StyledPage>
        )
}
export default SignUpPageContainer