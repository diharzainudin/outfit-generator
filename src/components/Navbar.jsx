import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <section>
        <ul className="navlinks">
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
      </section>
      <section>
        <div className="login-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Username" name="username"></input>
            <input type="text" placeholder="Password" name="psw"></input>
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    </nav>
  )
}
export default Navbar
