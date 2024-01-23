import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BatchDetailsPage from "./pages/operational_team/BatchDetailsPage";
import OperationalTeamDashboard from "./pages/operational_team/OperationalTeamDashboard";
import AddNewBatch from "./pages/operational_team/AddNewBatch";
import AddNewCandidate from "./pages/operational_team/AddNewCandidate";
import EmployeeInfo from "./pages/operational_team/EmployeeInfo";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />        
        <Route path="/operationalteam/batch/:batchId" element={<BatchDetailsPage />} />
        <Route path="/operationalteam/dashboard" element={<OperationalTeamDashboard />} />
        <Route path="/operationalteam/add-new-batch" element={<AddNewBatch />} />
        <Route path="/operationalteam/add-new-candidate" element={<AddNewCandidate />} />
        <Route path="/operationalteam/employee-info" element={<EmployeeInfo />} />
      </Routes>
    </>
  )
}

export default App
