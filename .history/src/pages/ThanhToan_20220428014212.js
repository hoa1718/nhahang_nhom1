import Tha from "../components/Topbar";
import Menu from "../components/Menu";
function App() {
  return (

    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid">
      <div className="row">
        <Menu></Menu>
      </div>
      </div>   
    </div>
    </div> 
  );
}

export default App;