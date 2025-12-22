import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/shared/Layout'
//VPP pages
import Dashboard from './pages/Vpp/dashboard'

//Rural MPP pages
import VillageDashboard from './pages/RuralMPP/Dashboard/Dashboard'
import Assets from './pages/RuralMPP/Assets/Assets'
import Forecasting from './pages/RuralMPP/Forecasting/Forecasting'
import GridBalancing from './pages/RuralMPP/GridBalancing/GridBalancing'
import P2PTrading from './pages/RuralMPP/P2PTrading/P2PTrading'
import Billing from './pages/RuralMPP/Billing/Billing'
import Maintenance from './pages/RuralMPP/Maintenance/Maintenance'
import Settings from './pages/RuralMPP/Settings/Settings'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          {/* -------------------------------------------------------------------- */}
          {/* Vpp Routes */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path= "/dashboard" element={< Dashboard/> }/>
          {/* -------------------------------------------------------------------- */}


          {/* ----------------------------------------------------------------- */}
          {/*Rural MPP Routes*/}
          <Route path="/vilagedashboard" element={<VillageDashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/forecasting" element={<Forecasting />} />
          <Route path="/grid-balancing" element={<GridBalancing />} />
          <Route path="/p2p-trading" element={<P2PTrading />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/settings" element={<Settings />} />
          {/* ------------------------------------------------------------------ */}


        </Routes>
      </Layout>
    </Router>
  )
}

export default App
