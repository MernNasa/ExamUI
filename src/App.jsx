import React from 'react'

import { RouterProvider } from 'react-router-dom'
import { route } from './routes/routes'
import { Provider } from 'react-redux'
import store from './redux/app/store'

const App = () => {
  return (
   <Provider store={store}>
    <RouterProvider router={route}/>
   </Provider>
  )
}

export default App