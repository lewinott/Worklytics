// Style
import { GlobalStyles } from './styles/global-styles';

// Libs
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import Tickets from './pages/tickets/main';
import Login from './pages/auth/main';
import Callback from './pages/auth/callback';
import { AuthProvider } from './contexts/authContext';
import ProtectedRoutes from './utils/ProtectedRoutes';

const App = () => {
  return (
    <Router>
      <GlobalStyles/>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<Callback />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path="/" element={<Tickets/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
