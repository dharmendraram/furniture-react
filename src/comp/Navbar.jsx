import logo from '../assets/logo/logo.jpg';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Details from '../pages/Details';
import CategoryData from '../pages/CategoryData';
import SofaSet from '../pages/SofaSet';
const Navbar = () => {

  return (
    <section className='header py-1'>
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src={logo}className='w-100' alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/category/school">School Benches</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/sofa">Seat Sofas</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Entertainment</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">MAC OS</a></li>
            <li><a className="dropdown-item" href="#">PC (10)</a></li>
          
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">TV Units</a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">MAC OS</a></li>
            <li><a className="dropdown-item" href="#">PC (10)</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Garden Set</a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">MAC OS</a></li>
            <li><a className="dropdown-item" href="#">PC (10)</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link "href=''>More</a>
        </li>
      </ul>
      <div className="nav-icon">
        <ul className='d-flex gap-2 align-items-center'>
            <li><a href=""><i className="bi bi-person-fill"title='user account'></i></a></li>
            <li><a href=""><i className="bi bi-search"title='search'></i></a></li>
            <li><a href=""><button type="button" className="btn position-relative p-0"><i className="bi bi-basket"title='cart'></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0
  </span>
</button></a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/category/school" element={<CategoryData />} />
        <Route path="/category/sofa" element={<SofaSet />} />      
</Routes>

    </section>
  )
}

export default Navbar
