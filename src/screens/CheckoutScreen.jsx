import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

export const CheckoutScreen = () => {

    const storedUserData = localStorage.getItem('userDataOrder');
    const initialPaymentMethod = storedUserData ? JSON.parse(storedUserData).paymentMethod || '' : '';


    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('');
    const [error, setError] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);

    const navigate = useNavigate()

    const userData = {
        email,
        name,
        telefono,
        ciudad,
        pais,
        paymentMethod
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            navigate('/payment')
            localStorage.setItem('userDataOrder', JSON.stringify({ ...userData }));
        } catch (e) {
            setError(e.message)
            console.log(error)
            swal({
                text: (e.message),
                title: "Revisá la información ingresada",
                icon: "warning",
              })
        }
    }


    useEffect(() => {
        const storedUserData = localStorage.getItem('userDataOrder');
        
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setEmail(parsedUserData.email || '');
            setName(parsedUserData.name || '');
            setTelefono(parsedUserData.telefono || '');
            setCiudad(parsedUserData.ciudad || '');
            setPais(parsedUserData.pais || '');
            setPaymentMethod(parsedUserData.paymentMethod || '');
        }
    }, []);

  return (
    <div>
        <div>
      <div className="flex items-center justify-center min-content">

                <div className='w-10/12 md:w-8/12 lg:w-5/12 py-6 mt-2 mb-28 md:mb-7'>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-4xl text-center mb-2 sm:text-start font-bold pb-2 text-sky-950">Datos para tu compra</h1>
                        </div>
                        <div>
                            <h1 className="text-4xl text-center sm:text-start font-bold pb-2 text-sky-950">1/3</h1>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col py-1'>
                            <label className='py-2 text-sm font-base text-sky-950'>Nombre</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} className='border p-2 rounded' placeholder='Ingresá tu nombre' type="text" required/>
                        </div>
                        <div className='flex flex-col py-1'>
                            <label className='py-2 text-sm font-base text-sky-950'>Correo Electrónico</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='border p-2 rounded' placeholder='Ingresá tu correo' type="email" required/>
                        </div>
                        <div className='flex flex-col py-1'>
                            <label className='py-2 text-sm font-base text-sky-950'>Teléfono</label>
                            <input onChange={(e) => setTelefono(e.target.value)} value={telefono} className='border p-2 rounded' placeholder='Ingresá tu teléfono' type="text" required/>
                        </div>
                        <div className='flex flex-col py-1'>
                            <label className='py-2 text-sm font-base text-sky-950'>Ciudad</label>
                            <input onChange={(e) => setCiudad(e.target.value)} value={ciudad} className='border p-2 rounded' placeholder='Ingresá tu ciudad' type="text" required/>
                        </div>
                        <div className='flex flex-col py-1'>
                            <label className='py-2 text-sm font-base text-sky-950'>País</label>
                            <input onChange={(e) => setPais(e.target.value)} value={pais} className='border p-2 rounded' placeholder='Ingresá tu país' type="text" required/>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className='text-xl font-medium bg-blue-600 hover:bg-blue-500 dark:bg-yellow-500 w-4/12 p-3 my-2 text-white rounded'>Continuar</button>     
                        </div>

                    </form>
                        
                </div>

        </div>
      </div>

    </div>
  )
}

