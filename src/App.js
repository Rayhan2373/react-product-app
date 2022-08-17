
import { useState } from 'react';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import Navber from './Components/Navber/Navber';


function App() {
  const [count, setCount] = useState(0);
  const addToCart=()=>{
    setCount(count+1)
  }
  return (
    <div className="App">
      <Navber cart={count}></Navber>
      <AllProducts cart={addToCart}></AllProducts>
    </div>
  );
}

export default App;
