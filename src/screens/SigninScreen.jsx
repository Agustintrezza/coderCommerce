import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import swal from "sweetalert";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      localStorage.setItem("userInfo", email);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(error);
      swal({
        title: "El usuario o contraseña no son válidos",
        text: "*El password debe contener mínimo 6 caracteres",
        icon: "warning",
      });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="flex items-center justify-center min-content">
        <div className="w-10/12 md:w-8/12 lg:w-5/12 py-6 mt-7 mb-28 md:mb-7">
          <div className="">
            <h1 className="text-4xl text-center sm:text-start font-bold text-sky-950 pb-2">
              ¡Iniciá sesión y accedé!
            </h1>
            <p className="py-1 text-center sm:text-start text-sky-950 font-medium text-xl mb-2">
              Iniciá sesión y accedé a nuestros productos.
            </p>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col py-1">
              <label className="py-2 text-sm font-base text-sky-950">
                Correo Electrónico
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresá tu correo"
                className="border p-2 rounded"
                type="email"
              />
            </div>
            <div className="flex flex-col py-1 relative">
              <label className="py-2 text-sm font-base text-sky-950">
                Contraseña
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresá tu contraseña"
                className="border p-2 rounded"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute right-3 bottom-[8px] transform -translate-y-1/2 cursor-pointer"
              >
                {/* Usa los íconos de ojo y ojo tachado */}
                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button className="text-xl font-medium bg-blue-600 hover:bg-blue-500 dark:bg-yellow-500 w-full p-3 my-2 text-white rounded">
              Iniciar Sesión
            </button>
          </form>
          <p className="py-1 text-sky-950 text-center sm:text-start">
            Si no tenés tu cuenta, creá una!{" "}
            <Link to={"/signup"} className="underline text-blue-500">
              <span className="text-blue-500">Registrarse</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
