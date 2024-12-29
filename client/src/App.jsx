import './App.css'
import { useEffect, useState } from 'react';
import CardItem from './Carditem';
import CartItem from "./CartItem";

function App() {
  const[dataFoods, setDataFoods]  = useState([])

  async function getData() {
    const url = "https://aquatic-polar-society.glitch.me/foods";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      
      setDataFoods(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  // ...

  //? handle cart
  const [cart, setCart] = useState([]);

  function addToCart(food) {
    setCart([...cart, food]);
  }

  return(
    <>
      {/* navbar */}
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#"> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LD5TejldiFwvkNvwiZReS7kbvZo4ACL99w&s" alt="Logo" width="80" height="80" class="me-2"/>
            <div>
            <span className="text-white fw-bold">Japanese Food Delicious</span>
              <span className="text-white d-block">makanan kesukaanmu</span>
            </div>
          </a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-light" type="submit">Search</button>
          </form>

          <button
            className="btn btn-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Cart - {cart.length}
          </button>
        </div>
      </nav>
      {/* akhir navbar */}

      {/* awal card */}
      <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {dataFoods.map((food, index)=> {
          return<CardItem food ={food} key={index} addToCart={addToCart}/>;
         })};
       {/* end of card */}   
      {/* drawer */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          {cart.map((el, i) => {
            return <CartItem cart={el} key={i} />;
          })}
        </div>
      </div>

      </div>
      </div>
    </>
  )
}

export default App;
