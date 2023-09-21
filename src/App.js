
import './App.css';
import image from './shopping.jpg';
import imageTwo from './man.jpg'
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className="App">
      <img src= { image } width="250px" alt="shopping"/>
      <h1>Grocery List</h1>
          <GroceryList />
      <img src = { imageTwo } width = "250px" alt = "man" />
    </div>
  );
}

export default App;
