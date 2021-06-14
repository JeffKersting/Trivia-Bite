import { Switch, Route, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Login from '../login/Login'
import Home from '../home/Home'

function App() {
  const [email, setEmail] = useState(null)

  return (
    <div className="App">
      {!email && <Redirect to='/login' />}
      {email && <Redirect to='/home' />}
      <Switch>
        <Route
          path='/login'
          render={() => {
            return (
              <Login setEmail={setEmail} />
            )}
          }
        />
        <Route
          path='/home'
          render={() => {
            return (
              <Home email={email} />
            )}
          }
        />
      </Switch>
    </div>
  );
}

export default App;
