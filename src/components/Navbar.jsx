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
          <a href="/wishlist.html">Wishlist</a>
        </li>
        <li>
          <a href="/styleme.html">Style Me</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
