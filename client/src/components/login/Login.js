import { GoogleLogin } from 'react-google-login'
import axiosRequests from '../../api/axios'
import axios from 'axios'

function Login({ setUser, user }) {
  const responseGoogle = async (response) => {
    console.log("RESPONSE OBJECT")
    const email = response.profileObj.email
    const userData = await axiosRequests.getUserData(email)
    if (userData) {
      setUser(userData)
    } else {
      axiosRequests.postUserData(response.profileObj.name, response.profileObj.email)
    }
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
