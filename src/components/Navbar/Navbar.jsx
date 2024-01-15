import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Cart } from "../Cart/Cart";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useMediaQuery } from "@react-hook/media-query";

export function MyNavbar() {
  const { user, logout } = UserAuth();
  const isScreenAbove768px = useMediaQuery("(min-width: 768px)");

  const userEmail = localStorage.getItem("userInfo");

  const navigate = useNavigate();

  const handleCategoriaClick = (categoria) => {
    navigate(`/categorias/${categoria}`);
  };

  return (
    <Navbar
      fluid
      rounded
      className="p-3 rounded-none sticky top-0 z-10 border-b-2 border-black-600"
    >
      {isScreenAbove768px ? (
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

      <div className="flex md:order-2 items-center gap-10">
        <Link to={"/cart"}>
          <Cart />
        </Link>
        <Dropdown
          arrowIcon={true}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://res.cloudinary.com/djpifu0cl/image/upload/v1700773114/agusbata_bkqoxz.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block font-bold text-sm">User</span>
            <span className="block truncate text-sm font-medium">
              {userEmail ? userEmail : "Iniciá Sesión"}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Mi Cuenta</Dropdown.Item>
          <Dropdown.Item>Órdenes</Dropdown.Item>
          <Dropdown.Item>Dashbord</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Cerrar Sesión</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse classNam="flex items-center">
        <NavLink
          className={`clase-link ${
            isScreenAbove768px ? "dark:text-white" : ""
          }`}
          to="/"
          activeClassName="active"
          exact
        >
          Home
        </NavLink>
        <NavLink
          className={`clase-link ${
            isScreenAbove768px ? "dark:text-white" : ""
          }`}
          to="/signin"
          activeClassName="active"
        >
          {user ? (
            <button
              className={`${isScreenAbove768px ? "dark:text-white" : ""}`}
              onClick={logout}
            >
              LogOut
            </button>
          ) : (
            <span
              className={`clase-link ${
                isScreenAbove768px ? "dark:text-white" : ""
              }`}
            >
              Sign In
            </span>
          )}
        </NavLink>

        <NavLink className="clase-link" to="/signup" activeClassName="active">
          Sign Up
        </NavLink>

        <div className="">
        <Dropdown color="blue" label="Categorías" dismissOnClick={false}>
          <Dropdown.Item onClick={() => handleCategoriaClick("baterias")}>Baterías</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoriaClick("guitarras")}>Guitarras</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoriaClick("bajos")}>Bajos</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoriaClick("metales")}>Metales</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoriaClick("audio")}>Audio</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoriaClick("accesorios")}>Accesorios</Dropdown.Item>
        </Dropdown>
      </div>
        
        <NavLink className="clase-link" to="/orders" activeClassName="active">
          Órdenes
        </NavLink>
              
      </Navbar.Collapse>
    </Navbar>
  );
}
