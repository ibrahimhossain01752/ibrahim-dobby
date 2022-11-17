import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import Register from './component/Login/Register/Register';
import AuthProvider from "./context/AuthProvider/AuthProvider";


function App() {
  return (
    <div className="App">
       <AuthProvider>
     <BrowserRouter>
       
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     
    </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
