/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Layout/Main'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Users from './Components/Users/Users'
import UserDetails from './Components/User/UserDetails/UserDetails'
import { Link } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/users',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Users></Users>
        },
        {
          path: '/user/:userId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          },
          element: <UserDetails></UserDetails>
        }
      ]
    },
    {
      path: '*',
      element: <div>This page is not found <Link to='/'>Go back to home</Link></div>,
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>

  )
}

export default App
