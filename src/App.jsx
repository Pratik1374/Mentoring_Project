import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AddBatchPage from "./pages/AddBatchPage";
import MentorsPage from "./pages/MentorsPage";
import MentorDetailsPage from "./pages/MentorDetailsPage";
import BatchesPage from "./pages/BatchesPage";
import StudentsPage from "./pages/StudentsPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import OperationalTeamHomePage from "./pages/operational_team/OperationalTeamHomePage";
import AllBatchesPage from "./pages/operational_team/AllBatchesPage";
import BatchDetailsPage from "./pages/operational_team/BatchDetailsPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add_batch" element={<AddBatchPage />} />
        <Route path="/:file_name/mentors" element={<MentorsPage />} />
        <Route path="/:file_name/mentors/:mentor_name" element={<MentorDetailsPage />} /> 
        <Route path="/:file_name/mentors/:mentor_name/batches" element={<BatchesPage />} /> 
        <Route path="/:file_name/mentors/:mentor_name/batches/:batch_name" element={<StudentsPage />} />
        
        <Route path="/operationalteam" element={<OperationalTeamHomePage />} />
        <Route path="/operationalteam/all-batches" element={<AllBatchesPage />} />
        <Route path="/operationalteam/batch/:batchId" element={<BatchDetailsPage />} />
        
      </Routes>
    </>
  )
}

export default App
