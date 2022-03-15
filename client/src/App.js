import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import OptionsPage from "./Pages/OptionsPage";
import GetYourRecipes from "./Pages/GetYourRecipes";
import Axios from "axios";
import CreatePage from "./Pages/CreatePage";

function App() {
  Axios.defaults.withCredentials = true;
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/options' element={<OptionsPage />} />
        <Route path='/recipes' element={<GetYourRecipes />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
