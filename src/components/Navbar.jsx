import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav>
      <ul class="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/mycloset">My Closet</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">Wishlist</NavLink>
        </li>
        <li>
          <NavLink to="/styleme">Style Me</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
