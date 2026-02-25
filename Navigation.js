import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <h1>Price Checker App</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/price-checker">Price Checker</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Navigation;
