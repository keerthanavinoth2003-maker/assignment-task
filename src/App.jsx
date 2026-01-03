import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Appointments from "./pages/Appointments";
import PatientView from "./pages/PatientView";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/appointments" />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patient/:id" element={<PatientView />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
