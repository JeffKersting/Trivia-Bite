import { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'

function Login() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')

  const responseGoogle = (response) => {
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setToken(response.qc.id_token)
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
