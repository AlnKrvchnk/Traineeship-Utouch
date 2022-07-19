import { StyledForm, StyledPage } from "../AuthContainer/StyledAuthPage";
import SignInForm, {Props} from "../../organisms/SignInForm/SignInForm";
import Nav from "../../molecules/Nav/Nav";

import { authPage } from "../../../routes/Paths";



const SignInPageContainer =({onAuth}:Props)=>{
    return(
        <StyledPage>
            <StyledForm>
            <Nav links={authPage}/>
            <SignInForm onAuth={onAuth} />
            </StyledForm>
        </StyledPage>
        )
}
export default SignInPageContainer