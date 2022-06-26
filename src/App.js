import React from "react";

const api = {
  key:'fe2941d0a146acc752535f474d5f5a23',
  baseUrl : 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="App">
     <main>
       <div className="search-box" >
             <input type = 'text' className="search-bar" placeholder='Search...'  />
       </div> 
      </main>
    </div>
  );
}

export default App;
