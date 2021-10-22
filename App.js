import logo from './logo.svg';
import './App.css';
import {Name, Img, Price, Discriptions} from './cart.js';
import {usestate} from 'react';





function App() {
  let obj = [
   
    { 
    img:"https://www.catfootwear.com/on/demandware.static/-/Sites-catfootwear_us-Library/default/dw38dae461/content/seasonal-content/homepage/2021/06/women-excavator-2.jpg",
    Name:"Shoes",
    Price: 3000,
    Discriptions:"white shoes",
    
  },
    {
    img:"https://sanvt.com/wp-content/uploads/2020/10/SANVT-the-perfect-oxford-shirt-superior-quality-3-510x638.jpg",
    Name: "shirts",
    Price: 500,
    Discriptions:"cotton shirts",
    
  },	
    {
    img:"https://m.media-amazon.com/images/I/51Xo+v2nyTL._AC_UX385_.jpg",
    Name:"key chain",
    Price: 1000,
    Discriptions:"bat key chain",
    }
  ];



  return (<>
    <div className = "container">
    <div class="box">
      <Name a={obj[0].Name} />
      <Img a={obj[0].img} />
      <Discriptions a={obj[0].Discriptions} />
      <Price a={obj[0].Price} /></div>

      <div className="box">
        <Name a={obj[1].Name} />
        <Img a={obj[1].img} />
        <Discriptions a={obj[1].Discriptions} />
        <Price a={obj[1].Price} /></div>
        
      <div className="box">
        <Name a={obj[2].Name} />
        <Img a={obj[2].img} />
        <Discriptions a={obj[2].Discriptions} />
        <Price a={obj[2].Price} /></div>
        </div>
    </>
    
    );
  }



export default App;
