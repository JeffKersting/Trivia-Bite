import { GoogleLogin } from 'react-google-login'
import axiosRequests from '../../api/axios'
import axios from 'axios'

function Login({ setUser, user }) {
  const responseGoogle = async (response) => {

    const email = response.profileObj.email
    const userData = await axiosRequests.getUserData(email)

    if (userData) {
      setUser(userData.data[0])
    } else {
      axios({
        method: 'POST',
        url: 'http://localhost:8080/user',
        data: {
          name: response.profileObj.name,
          email: response.profileObj.email,
          token: response.qc.id_token
        }
      })
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
