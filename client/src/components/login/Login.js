import { GoogleLogin } from 'react-google-login'
import axiosRequests from '../../api/axios'
import axios from 'axios'

/*
  Login is called when the user initially signs in with a google account,
  OR when they are redirected to the login page from App.js upon site load.
  Line 44: isSignedIn allows for login to occur automatically
*/
function Login({ setUser, user, setLoading }) {
  const responseGoogle = async (response) => {
    setLoading(true)
    /*
      Email data is retrieved from GoogleLogin component, and is used to
      retrieve users data
    */
    const email = await response.profileObj.email
    const userData = await axiosRequests.getUserData(email)

    /*
      A conditional checks for existence of user data, if user has data,
      they are simply logged in. If user has no data, an axios request
      adds the user to the database
    */
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
          Welcome to Trivia Bite. Every day ten new trivia questions are added. You can play alone, join a group a friend has made, or create your own group and invite friends to compete daily.
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
