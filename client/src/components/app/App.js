import { Switch, Route, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Login from '../login/Login'
import Home from '../home/Home'
import Loading from '../loading/Loading'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loading setLoading={setLoading}/>}
        <div className="App">
        {!user && <Redirect to='/login' />}
        {user && <Redirect to='/home' />}
        <Route
        path='/login'
        render={() => {
          return (
            <Login
            setUser={setUser}
            setLoading={setLoading}
            />
          )}
        }
        />
        <Route
        path='/home'
        render={() => {
          return (
            <>
            {!user && <Redirect to='/login' />}
            {user && <Home user={user} setUser={setUser} setLoading={setLoading}/>}
            </>
          )}
        }
        />
        </div>

    </>
  );
}

export default App;
