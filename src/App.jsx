import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OperationalTeamHomePage from "./pages/operational_team/OperationalTeamHomePage";
import AllBatchesPage from "./pages/operational_team/AllBatchesPage";
import BatchDetailsPage from "./pages/operational_team/BatchDetailsPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />        
        <Route path="/operationalteam" element={<OperationalTeamHomePage />} />
        <Route path="/operationalteam/all-batches" element={<AllBatchesPage />} />
        <Route path="/operationalteam/batch/:batchId" element={<BatchDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
