import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Menu from '../pages/menu/Menu'
import Status from '../pages/status/About'
import { Profiler } from 'react'

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
    element: <Profiler />,
  },
])

export default router
