import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TasksList from './pages/TasksList';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksList />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
