import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartState } from "../../context/Context";
import SearchBar from "../Products/SearchBar";

const NavBar = (props) => {
    const {
        state: { cart },
    } = CartState();
    let navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg" className="mb-4" fixed="top" >
            <Container fluid>
                <Navbar.Brand>
                    <Link
                        to="/"
                        className="Logo"
                    >
                        TeeRex Store
                    </Link>
                </Navbar.Brand>

                {useLocation().pathname.split("/")[1] !== "cart" && (
                    <div className="search text-center">
                        <SearchBar />
                    </div>
                )}

                <Nav className="ml-auto">
                <Navbar.Brand>
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#000" }}
                    >
                        Products
                    </Link>
                </Navbar.Brand>
                    <Dropdown title="cart" >
                        <Button
                            variant="info"
                            onClick={() => {
                                navigate("/cart");
                            }}
                        >
                            <FaShoppingCart color="white" fontSize="25px" />
                            <span
                                className="badge badge-dark"
                                style={{ position: "absolute" ,marginLeft:"-5px"}}
                            >
                                {cart.length}
                            </span>
                        </Button>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
