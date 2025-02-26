import React from 'react';
import { Nav, NavDropdown, Image} from 'react-bootstrap';

export const ProfileNav = () => {
    return (
        <Nav activeKey="1" className="profile-nav h-100">
            <Nav.Item>
                <Nav.Link eventKey="1" href="#">
                    <i className="fi fi-rr-envelope"></i>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" href="#">
                    <i className="fi fi-rr-bell"></i>
                </Nav.Link>
            </Nav.Item>
            <NavDropdown id="nav-dropdown" title={
                <div className="row">
                    <div className="col">
                        <Image roundedCircle={true} src="https://i.pravatar.cc/150?img=59" height="36px"/>
                    </div>
                    <div className="col text-center">
                        <div className="row">
                            <span className="ml-4">John Smith</span>
                        </div>
                        <div className="row">
                            <span className="text-muted"> (Wealth Manager)</span>
                        </div>
                    </div>
                </div>
            }
            >
                <NavDropdown.Item eventKey="4.1">
                    <i className="fi fi-rr-user"></i>
                    <span>My Profile</span>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2" href="/logout">
                    <i className="fi fi-rr-sign-out-alt"></i>
                    <span>Logout</span>
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}