import { useEffect, useState } from 'react';
import { Table, Spinner } from 'flowbite-react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import {Tooltip} from 'react-tippy';


export const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, 'ordenes');
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersData = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        ordersData.forEach(order => {
          order.createdAt = new Date(order.date);
        });
        ordersData.sort((a, b) => b.createdAt - a.createdAt);
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
      setLoading(false); 
    };

    fetchOrders();
  }, []);


  const eliminarOrden = async (orderId) => {
    try {
      const orderDocRef = doc(db, 'ordenes', orderId);
      await deleteDoc(orderDocRef);
      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error('Error eliminando orden:', error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Spinner color="warning" className="h-20 w-20"></Spinner>
          <p className="mt-4">Cargando Órdenes...</p>
        </div>
      ) : (
        <div className="container-orders">
          <div className="flex justify-between">
            <div className="gap-6 my-10 flex items-center">
              <h1 className="text-5xl font-semibold text-sky-950">
                Órdenes creadas
              </h1>
            </div>
          </div>
          <div className="">

            {orders.length === 0 ? (
              <div className="bg-blue-600 w-full text-white flex text-lg font-semibold p-4 rounded">
              <p className="w-full flex">Aún no hay órdenes creadas en el sitio. <a className="underline ms-4" href="/">¡Creá una aquí!</a></p>
            </div>
            ): (
              <div className="contenedor-tabla-overflow">
              <Table className="mb-10" hoverable>
              <Table.Head>
                <Table.HeadCell>Orden ID</Table.HeadCell>
                <Table.HeadCell>USUARIO</Table.HeadCell>
                <Table.HeadCell>FECHA</Table.HeadCell>
                <Table.HeadCell className="text-center">Items</Table.HeadCell>
                <Table.HeadCell>TOTAL</Table.HeadCell>
                <Table.HeadCell>ACCIONES</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Delete</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {orders.map((order, index) => (
                  <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {order.id}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {order.user.name}
                    </Table.Cell>
                    <Table.Cell>
                      {order.date ? (
                        <span>
                          {new Date(order.date).toLocaleDateString('es-ES', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      ) : (
                        'Fecha no disponible'
                      )}
                    </Table.Cell>
                    <Table.Cell className="text-center">{order.items.length}</Table.Cell>
                    <Table.Cell>${order.totalPrices}</Table.Cell>
                    <Table.Cell>
                      <Tooltip title="Ver órden">
                      <Link to={`/order/${order.id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      <IoDocumentTextOutline className="w-6 h-6 text-blue-400" />
                      </Link>
                      </Tooltip>
                    </Table.Cell>
                    
                    <Table.Cell>
                    <Tooltip title='Eliminar órden'>
                      
                      <button 
                      onClick={() => {
                        const confirmed = window.confirm(
                          "¿Estás seguro que deseas eliminar el producto?"
                        );
                        if (confirmed) {
                          eliminarOrden(order.id);
                        }
                      }}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        <MdDelete className="w-6 h-6 text-red-400" />
                      </button>

                      </Tooltip>

                    </Table.Cell>

                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            </div>
            )}
            
          </div>
        </div>
      )}
    </>
  );
};
