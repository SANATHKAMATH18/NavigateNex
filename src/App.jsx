import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import GlobalStyles from './styles/GlobalStyles'
import Dashboard from './pages/Dashboard'
import Features from './pages/Features'
import CourseLearning from './pages/CourseLearning'
import CourseRegistration from './pages/CourseRegistration'
import ContactUs from './pages/ContactUs'
import Account from './pages/Account'
import Login from './pages/Login'
import Signin from './pages/Signin'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './ui/AppLayout'
import ProtectedRoute from './ui/ProtectedRoute'
import { DarkModeProvider } from './context/DarkModeContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
})

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}

        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to='dashboard' />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='features' element={<Features />} />
              <Route path='courselearning' element={<CourseLearning />} />
              <Route
                path='courseregistration'
                element={<CourseRegistration />}
              />
              <Route path='contact-us' element={<ContactUs />} />
              <Route path='account' element={<Account />} />
            </Route>

            <Route path='login' element={<Login />} />
            <Route path='signin' element={<Signin />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
