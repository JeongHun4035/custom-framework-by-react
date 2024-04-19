import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from '@/pages/DashBoard.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
