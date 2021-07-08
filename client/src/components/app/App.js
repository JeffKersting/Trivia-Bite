import { Switch, Route, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Login from '../login/Login'
import Home from '../home/Home'
import Loading from '../loading/Loading'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const checkUser = () => {
    user ? <Redirect to='/home' /> : <Redirect to='/login' />
  }


  return (
    <div className="App">

        {loading && <Loading setLoading={setLoading}/>}

        <Route
          path='/login'
          render={() => {
            return (
              <Login setUser={setUser}/>
            )}
          }
        />
        <Route
          path='/home'
          render={() => {
            return (
              <>
                {!user && <Redirect to='/login' />}
                {user && <Home user={user} setUser={setUser}/>}
              </>
            )}
          }
        />

    </div>
  );
}

export default App;
