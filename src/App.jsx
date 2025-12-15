import React from 'react'
import router from './router/Router'
import { RouterProvider } from 'react-router'
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
function App() {
const queryClient = new QueryClient()

  return (
    <div>
     <QueryClientProvider client={queryClient}>

            <RouterProvider router={router}></RouterProvider>


    </QueryClientProvider>

    </div>
  )
}

export default App
