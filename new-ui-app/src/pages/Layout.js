import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import NewList from "./NewList";
import Detail from "./Detail";
export default function Layout(){
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                <header  style={{ fontSize: "40px" }} className="cursor">News API UI</header>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ fontSize: "20px" }} className="ml-auto">
                        <Nav.Link className="cursor"  as={Link} to="/" exact>
                        <i className="bi bi-house"></i> Home
                        </Nav.Link>
                        <Nav.Link className="cursor" as={Link} to="/list">
                        <i className="bi bi-newspaper"></i>  News
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<Home />} />
                        <Route path="/list" element={<NewList />} />
                        <Route path="/detail/:author" element={<Detail />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}