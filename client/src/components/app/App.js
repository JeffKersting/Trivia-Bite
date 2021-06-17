import { Switch, Route, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from '../login/Login'
import Home from '../home/Home'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log(window.localStorage)
  }, [])

  return (
    <div className="App">
      {!user && <Redirect to='/login' />}
      {user && <Redirect to='/home' />}
      <Switch>
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
              <Home user={user} />
            )}
          }
        />
      </Switch>
    </div>
  );
}

export default App;
