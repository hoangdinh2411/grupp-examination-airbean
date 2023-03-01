import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Nav from '../pages/nav/Nav'
import Menu from '../pages/menu/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/nav',
    element: <Nav />,
  },
  {
    path: 'menu',
    element: <Menu />,
  }
])

export default router
