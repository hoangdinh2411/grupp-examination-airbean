import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Menu from '../pages/menu/Menu'
import Status from '../pages/status/About'
import Profile from '../pages/profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/status',
    element: <Status />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
])

export default router
