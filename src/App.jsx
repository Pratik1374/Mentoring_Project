import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AddBatchPage from "./pages/AddBatchPage";
import MentorsPage from "./pages/MentorsPage";
import MentorDetailsPage from "./pages/MentorDetailsPage";
import BatchesPage from "./pages/BatchesPage";
import StudentsPage from "./pages/StudentsPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";

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
        <Route path="/:file_name/mentors/:mentor_name/:batch_name/:student_name" element={<StudentDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
