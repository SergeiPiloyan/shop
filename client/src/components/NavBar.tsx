import { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../App";
import { observer } from "mobx-react-lite";

export const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink
          to={SHOP_ROUTE}
          style={{ color: "white", textDecoration: "none" }}
        >
          Store
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant="outline-light">Admin</Button>
            <Button variant="outline-light" style={{ marginLeft: "10px" }}>
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button variant="outline-light">Sign in</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
