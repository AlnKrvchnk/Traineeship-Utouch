import { StyledForm, StyledPage } from "../AuthContainer/StyledAuthPage";
import SignUpForm,{Props} from "../../organisms/SignUpForm/SignUpForm";
import Nav from "../../molecules/Nav/Nav";

import { authPage } from "../../../routes/Paths";

const SignUpPageContainer =({onAuth}:Props)=>{
    return(
        <StyledPage>
            <StyledForm>
            <Nav links={authPage}/>
            <SignUpForm onAuth={onAuth}/>
            </StyledForm>
        </StyledPage>
        )
}
export default SignUpPageContainer