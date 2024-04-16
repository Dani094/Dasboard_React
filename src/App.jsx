import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
// components 
import Sider from "./components/sidebar.jsx"
// pages 
import Content from "./pages/content.jsx"


function App() {
const [showMenu, setShowMenu]= useState(false)
const [showOrder, setShowOrder]= useState(false)

const toggleMenu=()=>{
  setShowMenu(!showMenu);
  setShowOrder(false)
};

const toggleOrders = () => {
  setShowOrder(!showOrder);
  setShowMenu(false);
};

  return (
   <div className='bg-[#262837] w-full min-h-screen'>
    <Sider showMenu={showMenu} />
    <Router>
      <Content showOrder={showOrder} setShowOrder={setShowOrder}/>
    </Router>
    
    {/* Menu movil  */}
    <nav className='bg-[#1F1D28] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center
    justify-between rounded-tl-xl rounded-tr-xl'>
      <button className='p-2'>
        <span className="material-icons">
          person
        </span>
      </button>
      <button className='p-2'>
        <span className="material-icons">
          home
        </span>
      </button>
      <button onClick={toggleOrders} className='p-2'>
        <span className="material-icons">
          shopping_cart
        </span>
      </button>
      <button onClick={toggleMenu} className='p-2'>
        <span className="material-icons">
          {showMenu ? "cancel" : "menu" }
        </span>
      </button>
    </nav>


   </div>
  )
}

export default App
