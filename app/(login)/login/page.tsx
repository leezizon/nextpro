
import AuthSession from '../../../components/providers/session-provider'
import LoginButton from '../../../components/login-button'

export default function login(){
    return(
        <div>
            <AuthSession>
                <div>
                    <LoginButton></LoginButton>
                </div>
            </AuthSession>
        </div>
    )
}