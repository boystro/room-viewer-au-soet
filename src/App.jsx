import { Route, Routes, Link } from "react-router-dom"
import Home from "./Home"
import Create from "./Create"
import Edit from "./Edit"
// import TimeTable from "./components/TimeTable";

export default function App() {
  return (
    <section className="main">

      <header>
        <h1>SOET Time Table App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/edit">Edit</Link></li>
          <li><Link to="/create">Create</Link></li>
        </ul>
      </header>

      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="create" element={<Create />}></Route>
        <Route path="edit" element={<Edit />}></Route>
        {/* <Route path="timetable/:sem" element={<TimeTable />}></Route> */}
      </Routes>

      <footer>
        <h2>&copy; SOET, Adamas Unviersity</h2>
      </footer>

    </section>
  );
}