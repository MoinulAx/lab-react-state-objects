import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MenuItems from "./MenuItems";

function App() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  
  function handleDelete(item,index){
    
    items.splice(index,1)
    setItems([...items])
    setTotal(total - item.price)

  }
  return (
    <div className="App">
      <Header />

      <main>
        <aside>
          <table>
            <MenuItems items ={items} setItems = {setItems}
            total = {total} setTotal = {setTotal} />
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {items.map((item,index) =>{
                return(

                  <>
                  <span onClick={()=>handleDelete(item,index)}>X</span>

                  <li>{item.name}{item.price}</li>
                  
                  </>
                  
                )
              })}
            </ul>
            <h4>Total: ${total}</h4>
            <div>
              <button>Tidy order</button>
              <button>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
