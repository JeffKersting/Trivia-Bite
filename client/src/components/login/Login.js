import { GoogleLogin } from 'react-google-login'
import axios from 'axios'

function Login({ setEmail, email }) {
  const responseGoogle = (response) => {

    setEmail(response.profileObj.email)
    axios({
      method: 'POST',
      url: 'http://localhost:8080/user',
      data: {
        name: response.profileObj.name,
        email: response.profileObj.email,
        token: response.qc.id_token
      }
    });
  }

  return (
    <>
      <GoogleLogin
        clientId="764899056810-2d6oki589hnrp6ir2i1pd1f3o41tg732.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </>
  )
}

export default Login
