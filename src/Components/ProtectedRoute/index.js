
import {Navigate, Route} from 'react-router-dom'
import Cookies from 'js-cookie' // Correct import

const ProtectedRoute = ({component: Component, ...rest}) => {
  const token = Cookies.get('jwt_token') // Get token from cookies

  return (
    <Route
      {...rest}
      render={props =>
        token !== undefined ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  )
}

export default ProtectedRoute
