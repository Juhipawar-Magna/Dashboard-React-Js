import { useState } from "react";
import "./App.css";
import { UserData } from "./components/Data";
import PieChart from "./components/PieChart";
import StackedBarChart from './components/StackedBarChart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Common/Nav";
// import BasicTable from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
// import {PaginationTable} from "./components/PaginationTable";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from "react-dom";
import Listitems from "./components/Listitems";


function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.empcode),
    datasets: [
      {
        label: "Features",
        data: UserData.map((data) => data.period),
        backgroundColor: ["red",
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
     <BrowserRouter>
     <NavBar />
     <Routes>
            <Route path="/" element={<PieChart />} />
            <Route path="/bar" element={<StackedBarChart />} />
          </Routes>
     </BrowserRouter>
     <div className="App">
      <Listitems/>
      
    </div>
      
    </>
  );
}


export default App;

















{/* <div className="App">
      <Listitems/>
      
    </div> */}

    {/* <div className="App">
      <h1>Select Feature</h1>
      <div style={{ margin: "16px", position: "relative" }} />
      <SelectBox
        items={[
          { value: "Feature1", id: 1 },
          { value: "Feature2", id: 2 },
          { value: "Feature3", id: 3 },
          { value: "Feature4", id: 4 },
          { value: "Feature5", id: 5 },
          { value: "Feature6", id: 6 },
          { value: "Feature7", id: 7 },
          { value: "Feature8", id: 8 },
        ]}
        />
    </div> */}




    {/* <div style={{ width: 1200 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{width:'72rem',height:'80vh'}}>
        <PieChart/>
      </div> */}
      {/* <StackedBarChart/> */}
     
      {/* <FilteringTable/> */}
      {/* <PaginationTable/> */}





      // const rootElement = document.getElementById("root");
      //     ReactDOM.render(<App />, rootElement);
