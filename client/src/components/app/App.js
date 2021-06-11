import { Switch, Route, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Login from '../login/Login'

function App() {
  const [email, setEmail] = useState(null)

  return (
    <div className="App">
      {!email && <Redirect to='/login' />}
      <Switch>
        <Route
          path='/login'
          render={() => {
            return (
              <Login setEmail={setEmail} />
            )}              
          }
        />
      </Switch>
    </div>
  );
}

export default App;
