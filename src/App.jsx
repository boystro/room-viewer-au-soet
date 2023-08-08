import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
// import TimeTable from "./components/TimeTable";

export default function App() {
  return (
    <section className="main">

      <header>
        SOET Time Table App
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
        </ul>
      </header>

      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="create" element={<Create />}></Route>
        {/* <Route path="timetable/:sem" element={<TimeTable />}></Route> */}
      </Routes>

      <footer>
        &copy; SOET, Adamas Unviersity
      </footer>

    </section>
  );
}