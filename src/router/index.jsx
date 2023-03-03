import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Menu from '../pages/menu/Menu'
import Status from '../pages/status/Status'
import Profile from '../pages/profile/Profile'
import About from '../pages/about/About'

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
  {
    path: '/about',
    element: <About />
  },
  {
    path: 'menu',
    element: <Menu />,
  }
])

export default router
