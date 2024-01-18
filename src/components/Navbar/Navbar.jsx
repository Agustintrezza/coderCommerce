import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Cart } from "../Cart/Cart";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";

export function MyNavbar() {
  const { user, logout } = UserAuth();
  const isScreenAbove968px = useMediaQuery("(min-width: 968px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userInfo");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoriaClick = (categoria) => {
    navigate(`/categorias/${categoria}`);
  };

  return (
    <Navbar
      fluid
      rounded
      className="p-3 rounded-none sticky top-0 z-10 border-b-2 border-black-600"
    >
      {isScreenAbove968px ? (
        <Navbar.Brand className="" href="/">
          <span className="w-full text-center whitespace-nowrap text-3xl font-bold text-sky-950">
            <span className="italic text-yellow-400">CODER </span>- Commerce
          </span>
        </Navbar.Brand>
      ) : (
        <Navbar.Brand className="" href="/">
          <span className="w-full flex flex-col text-center whitespace-nowrap text-2xl font-bold text-sky-950">
            <span className="italic text-start text-sky-950">CODER</span>
            <span className="italic text-yellow-400">Commerce</span>
          </span>
        </Navbar.Brand>
      )}

      <div className="flex md:order-2 items-center gap-6">
        <Link to={"/cart"}>
          <Cart />
        </Link>

        {user ? (
          <Dropdown
            arrowIcon={true}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://res.cloudinary.com/djpifu0cl/image/upload/v1701584441/buddhabyn_ybmxfw.webp"
                rounded
              />
            }
          >
            <Dropdown.Item>
              {userEmail && <p>User: {userEmail}</p>}
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <img
            className="rounded-full h-10 w-10 me-4"
            src="https://res.cloudinary.com/djpifu0cl/image/upload/v1701584441/buddhabyn_ybmxfw.webp"
          />
        )}

        <Navbar.Toggle onClick={handleMenuToggle} />
      </div>
      <>
        <Navbar.Collapse
          className={`flex items-center ${
            isMenuOpen
              ? "block transition-all duration-300 ease-in-out"
              : "hidden"
          } md:flex`}
        >
          <NavLink
            className={`clase-link ${
              isScreenAbove968px ? "dark:text-white" : ""
            }`}
            to="/"
            activeclassname="active"
            exact={true.toString()}
          >
            Home
          </NavLink>

          <NavLink className="clase-link" to="/orders" activeclassname="active">
            Órdenes
          </NavLink>

          <NavLink
            className={`clase-link ${
              isScreenAbove968px ? "dark:text-white" : ""
            }`}
            to="/signin"
            activeclassname="active"
          >
            {user ? (
              <button
                className={`${isScreenAbove968px ? "dark:text-white" : ""}`}
                onClick={logout}
              >
                Cerrar Sesión
              </button>
            ) : (
              <span
                className={`clase-link ${
                  isScreenAbove968px ? "dark:text-white" : ""
                }`}
              >
                Sign In
              </span>
            )}
          </NavLink>

          {!user && (
            <NavLink
              className="clase-link"
              to="/signup"
              activeclassname="active"
            >
              Sign Up
            </NavLink>
          )}

          <div className="flex justify-center mt-2 md:m-0">
            <Dropdown color="blue" label="Categorías" dismissOnClick={false}>
              <Dropdown.Item
                className="text-center"
                onClick={() => handleCategoriaClick("baterias")}
              >
                Baterías
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoriaClick("guitarras")}>
                Guitarras
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoriaClick("bajos")}>
                Bajos
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoriaClick("metales")}>
                Metales
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoriaClick("audio")}>
                Audio
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoriaClick("accesorios")}>
                Accesorios
              </Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}
