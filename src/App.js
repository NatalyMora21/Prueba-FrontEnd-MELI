import logo from './logo.svg';
import './App.css';

import Search from './components/Search';
import { Items } from './components/Items';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Item } from './components/Item';


function App() {

  /*const dispatch = useDispatch ();

  useEffect ( async ()=> {
    console.log("INGRESO")
    const data = await getAllItems();
    //console.log("---")
    //console.log(data)
    //dispatch(initItems(data));
  },[])*/


  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />}>
     
          </Route>

          <Route path="/items?search">

          </Route>
          <Route path="/items/:id" element= {<Item/>}>
            
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
