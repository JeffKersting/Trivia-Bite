import { useState } from 'react'
import { GoogleLogin } from 'react-google-login'

function Login() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [url, setUrl] = useState('')

  const responseGoogle = (response) => {
    console.log(response.qc.id_token)
    setEmail(response.profileObj.email)
    setName(response.profileObj.name)
  }

  return (
    <>
      <GoogleLogin
        clientId="764899056810-2d6oki589hnrp6ir2i1pd1f3o41tg732.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </>
  )
}

export default Login
