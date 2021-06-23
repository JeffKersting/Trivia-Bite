import { Switch, Route, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Login from '../login/Login'
import Home from '../home/Home'

function App() {
  const [user, setUser] = useState(null)


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
              <>
                {!user && <Redirect to='/login' />}
                {user && <Home user={user} setUser={setUser}/>}
              </>
            )}
          }
        />
      </Switch>
    </div>
  );
}

export default App;
