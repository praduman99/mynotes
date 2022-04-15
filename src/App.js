import "./App.css";
import './frontend/commonstyles/Globalstyles.css'
import Navbar from "./frontend/commoncomponents/navbar/navbar";

import Navigator from "./frontend/navigation/navigator";




function App() {
  return (
    <div className="App" style={{backgroundColor:"black",color:"white"}}>
    
      <Navbar/>
<Navigator/>
    
    </div>
  );
}

export default App;
