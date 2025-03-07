// Style
import { GlobalStyles } from './styles/global-styles';

// Libs
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import Tickets from './pages/tickets/main';
import Produtivity from './pages/produtivity/main';
import Login from './pages/auth/main';
import Callback from './pages/auth/callback';
import { AuthProvider } from './contexts/authContext';
import ProtectedRoutes from './utils/ProtectedRoutes';
import { TicketProvider } from './contexts/ticketsContext';

const App = () => {
  return (
    <Router>
      <GlobalStyles/>
      <AuthProvider>
        <TicketProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
            
            <Route element={<ProtectedRoutes/>}>
              <Route path="/" element={<Tickets/>}/>
              <Route path="/produtivity" element={<Produtivity/>}/>
            </Route>
          </Routes>
        </TicketProvider>
      </AuthProvider>
    </Router>

    // <Router>
    //   <GlobalStyles/>
    //     <Routes>
    //       {/* <Route element={<ProtectedRoutes/>}> */}
    //         <Route path="/" element={<Tickets/>}/>
    //         <Route path="/produtivity" element={<Produtivity/>}/>
    //       {/* </Route> */}
    //     </Routes>
    // </Router>
  )
}

export default App
