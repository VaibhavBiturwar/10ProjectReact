export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="/brand_logo.png" alt="brand_logo" />
      </div>
      <ul className="navItems">
        <li className="navItemText">Menu</li>
        <li className="navItemText">Location</li>
        <li className="navItemText">About</li>
        <li className="navItemText">Contact</li>
      </ul>

      <button className="actionBtn">Login</button>
    </div>
  );
}
