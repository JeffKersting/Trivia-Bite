import { Switch, Route, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Login from '../login/Login'
import Home from '../home/Home'

const api = process.env.PORT || 'http://localhost:8080'

function App() {
  const [user, setUser] = useState(null)
  console.log('ENVIRONMENT', process.env.PORT)

  return (
    <div className="App">
      {!user && <Redirect to={`${api}/login`} />}
      {user && <Redirect to={`${api}/home`} />}
      <Switch>
        <Route
          path={`${api}/login`}
          render={() => {
            return (
              <Login setUser={setUser}/>
            )}
          }
        />
        <Route
          path={`${api}/home`}
          render={() => {
            return (
              <>
                {!user && <Redirect to={`${api}/login`} />}
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
