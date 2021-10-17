import React from "react"
// import Login from './pages/Login'
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

export default [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home
  }
]