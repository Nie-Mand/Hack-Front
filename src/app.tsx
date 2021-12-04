import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'
import Routes from './config/app.routes'

const App = (props: any) => {
  const isAuth = true

  return (
    <Suspense fallback={<h1>Loqding</h1>}>
      <Router>
          <Switch>
            {Routes.routes.map(
              ({ path, component: Component, shouldBeloggedIn }: any) =>
                !shouldBeloggedIn || (isAuth && shouldBeloggedIn) ? (
                  <Route
                    key={path}
                    exact
                    path={path}
                    component={props => <Component {...props} />}
                  />
                ) : null
            )}

            <Redirect to="/404" />
          </Switch>
      </Router>
    </Suspense>
  )
}
export default App
