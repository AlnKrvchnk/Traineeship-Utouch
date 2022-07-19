import { StyledForm, StyledPage } from "../AuthContainer/StyledAuthPage";
import SignInForm from "../../organisms/SignInForm/SignInForm";
import Nav from "../../molecules/Nav/Nav";

import { authPage } from "../../../routes/Paths";

const SignInPageContainer =()=>{
    return(
        <StyledPage>
            <StyledForm>
            <Nav links={authPage}/>
            <SignInForm />
            </StyledForm>
        </StyledPage>
        )
}
export default SignInPageContainer