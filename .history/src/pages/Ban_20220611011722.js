import Topbar from "../components/Topbar";
import Ban from "../components/Ban/Ban.js";
import Sidebar from '../components/Sidebar'
import React, { useState,useEffect} from "react";
import axios from "axios";
function App() {
  const [soBan,setSoBan]= useState();
  const [orders,setOrders]= useState();
  const getBan =()=>{
    axios.get('http://localhost:4000/ThanhToan/Ban')
    .then(res => {
     setSoBan(res.data.result.Length);
     setOrders(res.data.orders);        
    })
    .catch(err =>{
      console.log(err);
    })
  }  
   useEffect(()=>{getBan()},[]);
  return (    
    <Sidebar>

    </Sidebar>
    
  );
}

export default App;