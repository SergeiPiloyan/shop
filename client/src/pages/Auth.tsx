import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-2" placeholder="Enter your email" />
          <Form.Control className="mt-2" placeholder="Enter your password" />
          <div className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                {`Don't have an account? `}
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={REGISTRATION_ROUTE}
                >
                  {"Create an account!"}
                </NavLink>
              </div>
            ) : (
              <div>
                {`Already have an account? `}
                <NavLink style={{ textDecoration: "none" }} to={LOGIN_ROUTE}>
                  {"Log in!"}
                </NavLink>
              </div>
            )}
            <Button variant="outline-success">
              {isLogin ? "Log in" : "Registration"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
