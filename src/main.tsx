import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PocketBase from "pocketbase";
import Home from "./Home.tsx";
import Videos from "./Videos.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import Instructors from "./Instructors.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import InstructorPage from "./InstructorPage.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Talabaty</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link className="nav-link" to="/signin">
                    Videos
                  </Link>
                  <Link className="nav-link" to="/instructors">
                    Instructors
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<App />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:id" element={<InstructorPage />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        <footer className="mt-auto py-3 border-top">
          <Container>
            <Row>
              <Col>
                <p className="text-muted">
                  © 2024 Acme Inc. All rights reserved.
                </p>
              </Col>
              <Col className="text-right">
                <Nav>
                  <Nav.Link as={Link} to="#">
                    Terms of Service
                  </Nav.Link>
                  <Nav.Link as={Link} to="#">
                    Privacy
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
export function Topics() {
  return <h2>Topics</h2>;
}
// eslint-disable-next-line react-refresh/only-export-components
export const pb = new PocketBase("https://aldiqa.com.ly");
