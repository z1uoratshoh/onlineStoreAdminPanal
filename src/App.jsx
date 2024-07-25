import React, { Suspense } from 'react'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/layout'
import Dashboard from './pages/dashboard/dashboard'
import Orders from './pages/orders/orders'
import Products from './pages/products/products'
import Other from './pages/other/other'
import Login from './pages/autentification/login/login'
import ProtectedRout from './utils/protectedRoute'
import Loading from './components/loading/loading'
import NotFound from './pages/notFound/notFound'
import ForgotPassword_1 from './pages/autentification/forgotPasswor_1/gorgotPassword_1'
import ForgotPassword_2 from './pages/autentification/forgotPasswor_2/forgotPassword_2'
import { Cotegories } from './routes/routes'
import Brends from './pages/other/brends/brends'
import Baners from './pages/other/baners/baners'
import OrdersAdd from './pages/orders/ordersAdd'
import ProductAdd from './pages/products/productAdd'



const App = () => {
  const router = createBrowserRouter([
    {
      path : "/login",
      element : (
        <Login/>
      )
    },
    {
      path : "/forgotPassword",
      element : (
        <Suspense fallback={<Loading/>}>
          <ForgotPassword_1/>
        </Suspense>
      )
    },
    {
      path : "/forgotPasswords",
      element : (
        <Suspense fallback={<Loading/>}>
          <ForgotPassword_2/>
        </Suspense>
      )
    },
    {
      path : "/",
      element : (
        <Suspense fallback={<Loading/>}>
          <ProtectedRout >
            <Layout/>
          </ProtectedRout> 
        </Suspense>
               
      ),
      children : [
        {
          index : true,
          element : (
            <Suspense fallback={<Loading/>}>
              <Dashboard/>
            </Suspense>
          )
        },
        {
          path : "/orders",
          element : (
            <Suspense fallback={<Loading/>}>
              <Orders/>
            </Suspense>
          )
        },
        {
          path : "orderAdd",
          element : (
            <Suspense fallback={<Loading/>}>
              <OrdersAdd/>
            </Suspense>
          )
        },
        {
          path : '/products',
          element  : (
            <Suspense fallback={<Loading/>}>
              <Products/>
            </Suspense>            
          )
        },
        {
          path : "/productAdd",
          element  : (
            <Suspense fallback={<Loading/>}>
              <ProductAdd/>
            </Suspense>            
          )
        },
        {
          path : "/others",
          element : (
            <Suspense fallback={<Loading/>}>
              <Other/>
            </Suspense>            
          ),
          children : [
            {
              index : true,              
              element : (                
                <Cotegories/>                
              )
            },
            {
              path : "brends",
              element : (
                <Brends/>
              )
            },
            {
              path : "baners",
              element : (
                <Baners/>
              )
            }
          ]
        }
      ]
    },
    {
      path  : "*",
      element : (
        <Suspense fallback={<Loading/>}>
          <NotFound/>
        </Suspense>
      )
    }
  ]) 
  return <RouterProvider router={router}/>
}

export default App
