
// import Form1 from './Componets/Form1';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import Header from "./Header";
import MyForm from "./Componets/MyForm";
import Index from "./Calculater/Index";


function App() {
  return (
    <div className="App">
     <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/form" element={<MyForm/>}/>
        <Route path="/calculater" element={<Index/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
