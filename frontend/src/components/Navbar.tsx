import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from '../App';
import Assessment from '../pages/Assessment';


export default function Navbar() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/pages/assessment">Assessment</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </BrowserRouter>
  );
}