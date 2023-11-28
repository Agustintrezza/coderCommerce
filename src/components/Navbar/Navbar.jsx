import { NavLink } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import {Cart} from '../Cart/Cart';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useMediaQuery } from '@react-hook/media-query';


export function MyNavbar() {

  const { user, logout } = UserAuth();
  const isScreenAbove768px = useMediaQuery('(min-width: 768px)');

  const userEmail = localStorage.getItem('userInfo')
  
  
  
  return (
    <Navbar fluid rounded className="p-3 rounded-none sticky top-0 z-10 border-b-2 border-black-600">
      {isScreenAbove768px ? (
        <Navbar.Brand className="" href="/">
          <span className="w-full text-center whitespace-nowrap text-3xl font-bold text-sky-950">
            <span className="italic text-yellow-400">
              CODER {" "}
            </span>
            - Commerce
          </span>
        </Navbar.Brand>
      ) : (
        <Navbar.Brand className="" href="/">
          <span className="w-full flex flex-col text-center whitespace-nowrap text-2xl font-bold text-sky-950">
            <span className="italic text-start text-sky-950">
              CODER
            </span>
            <span className="italic text-yellow-400">Commerce</span>
          </span>
        </Navbar.Brand>
      )}

      <div className="flex md:order-2 items-center gap-10">
        <Cart />
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
              {userEmail ? (userEmail) : ('Iniciá Sesión')}
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
      <Navbar.Collapse>
        <NavLink
          className={`clase-link ${
            isScreenAbove768px ? "dark:text-white" : ""
          }`}
          to="/"
          activeClassName="active"
          exact
        >
          Inicio
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
      </Navbar.Collapse>
    </Navbar>
  );
}



