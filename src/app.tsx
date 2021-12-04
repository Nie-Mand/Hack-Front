import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'
import Layout from './shared/components/Layout'
import Routes from './config/app.routes'
import Loading from './shared/components/Loading'
import { Toaster } from 'react-hot-toast'
import Notification from './shared/components/Notification'

const App = (props: any) => {
  const isAuth = true

  return (
    <Suspense fallback={<Loading className="w-10 h-10 m-auto" />}>
      <Router>
        <Layout>
          <Toaster />
          <Notification />
          <Switch>
            {Routes.routes.map(
              ({ path, component: Component, shouldBeloggedIn }: any) =>
                !shouldBeloggedIn || (isAuth && shouldBeloggedIn) ? (
                  <Route
                    key={path}
                    exact
                    path={path}
                    component={props => <Component {...props} user={user} />}
                  />
                ) : null
            )}

            <Redirect to="/404" />
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}
export default App
