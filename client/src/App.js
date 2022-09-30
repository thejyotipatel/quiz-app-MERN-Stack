import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuestionPage from './pages/QuestionPage'
import AllQuestion from './pages/AllQuestion'
import ProtectedRoute from './pages/protectedRoute'
import SharedLayout from './pages/sharedLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<QuestionPage />} />
          <Route path='/allquestion' element={<AllQuestion />} />
        </Route>
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
