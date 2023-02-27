import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Nav from '../pages/nav/Nav'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/nav',
    element: <Nav />,
  },
])

export default router
