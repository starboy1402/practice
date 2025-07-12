import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import ApplyForm from './pages/ApplyForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/apply/:serviceId" element={<ApplyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
