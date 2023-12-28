import React from "react";
import Header from "./Header";
import Banner from "./Banner";

function App() {
  const contacts =[
    {
      id: "1",
      name : "Bala",
      email : "bala34735@gmail.com"
    },
    {
      id:"2",
      name:"pappu",
      email:"pappu_blal@gmail.com"
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
      
        <Header contacts={contacts} Action="Navigate the Page"/>

      </header>

      <div className="banner_area"> 
        <Banner/>
      </div>
    </div>


  );
}

export default App;
