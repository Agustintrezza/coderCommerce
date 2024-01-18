import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext';
import swal from 'sweetalert'

const SignupScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {createUser} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password)
            navigate('/signin')
        } catch (e) {
            setError(e.message)
            console.log(error)
            swal({
                text: (e.message),
                title: "El usuario o la constraseña no son válidos",
                icon: "warning",
              })
        }
    }

  return (

    <div>
      <div className="flex items-center justify-center min-content">

                <div className='w-10/12 md:w-8/12 lg:w-5/12 py-6 mt-7 mb-28 md:mb-7'>
                    <div>
                        <h1 className="text-4xl text-center sm:text-start font-bold pb-2 text-sky-950">¡Creá tu cuenta, gratis!</h1>
                        <p className='py-1 text-center sm:text-start font-medium text-xl mb-2 text-sky-950'>
                            Creá tu cuenta y accedé a nuestros productos.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col py-1'>
                            <label className='py-2 text-sm font-base text-sky-950'>Correo Electrónico</label>
                            <input onChange={(e) => setEmail(e.target.value)} className='border p-2 rounded' placeholder='Ingresá tu correo' type="email"/>
                        </div>
                        <div className='flex flex-col py-1'>
                            <label className='py-2 text-sm font-base text-sky-950'>Contraseña</label>
                            <input onChange={(e) => setPassword(e.target.value)} placeholder='Ingresá tu contraseña' className='border p-2 rounded' type="password"/>
                        </div>
                        <button type="submit" className='text-xl font-medium bg-blue-600 hover:bg-blue-500 dark:bg-yellow-500 w-full p-3 my-2 text-white rounded'>Crear Cuenta</button>

                        <p className='py-1 text-sky-950 text-center sm:text-start'>
                            Si ya tenés una cuenta! <Link to={'/signin'} className='underline'><span className="underline text-blue-500">Inciar Sesión</span></Link>
                        </p>
                    </form>
                        
                </div>

        </div>
      </div>
   
  )
}


export default SignupScreen
