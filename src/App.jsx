import "./App.css";
import { ContainerItems } from "./components/Container";
import { NavBar } from "./components/Navbar";
import { TableList}  from "./components/TableData";


const headers = ["Name", "Skillset", "Votes"];
const tableDatas = [
  {
    name: "Alfonse Elrich",
    skill: "Being Loveable, Alchemy",
    vote: 110
  },
  {
    name: "Edward Elrich Full Metal Alchemist",
    skill: "Alchemy, Human Transmutation",
    vote: 100
  },
  {
    name: "Hawkeye",
    skill: "Sniper, Loyal AF",
    vote: 95
  },
  {
    name: "Mj. Armstrong",
    skill: "Alchemy, Muscles",
    vote: 94
  },
  {
    name: "Nina",
    skill: "Loving Dogs, being adorable",
    vote: 93
  },
]
function App() {
  
  return (
    <>
      <div className="body">
          <NavBar/>
          <TableList headers={headers} tableDatas={tableDatas}/>
          <ContainerItems/>
      </div>
    </>
  );
}

export default App;
