import "./App.css";
import RecipeCard from "./components/Cards";
import LogIn from "./components/LoginComponent";

function App() {
  return (
    <div className='App'>
      <LogIn />
      <RecipeCard />
    </div>
  );
}

export default App;
