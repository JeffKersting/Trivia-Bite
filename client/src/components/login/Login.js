import { GoogleLogin } from 'react-google-login'
import axiosRequests from '../../api/axios'
import axios from 'axios'

function Login({ setUser, user, setLoading }) {
  const responseGoogle = async (response) => {
    setLoading(true)
    const email = await response.profileObj.email
    const userData = await axiosRequests.getUserData(email)
    if (userData) {
      setUser(userData)
    } else {
      axiosRequests.postUserData(response.profileObj.name, response.profileObj.email)
    }
  }

  return (
    <div className="login-page">
      <div className='site-name'>
        <p className='trivia'>Trivia</p>
        <p className='bite'>Bite</p>
        <div className='login-icon'/>
      </div>
      <div className='login-section'>
        <p className='site-about'>
          Welcome to Trivia Bite. Every day there are ten new trivia questions added. You can play alone, join a group a friend has made, or create your own group and invite friends to compete daily.
        </p>
        <GoogleLogin
          className="google-login"
          clientId="764899056810-2d6oki589hnrp6ir2i1pd1f3o41tg732.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
    </div>
  )
}

export default Login
