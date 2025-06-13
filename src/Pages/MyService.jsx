import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useLoaderData } from 'react-router';

const MyService = () => {
    useEffect(() => {
        document.title = "MyService | Service-review";
    }, []);
    const data = useLoaderData()
    const { user, loading } = useContext(AuthContext)
    const [tasks, setTasks] = useState([]);


    const userEmail = user?.email;
    useEffect(() => {
        setTasks(data);
    }, [data]);
    // console.log(data)
    const myServiceData = tasks.filter(
        service => service.email.toLowerCase() === userEmail?.toLowerCase()
    );
    //    console.log(myPostedData)
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-dots text-info"></span>
        </div>
    }

    const handleDelete = (_id) => {
        console.log("Delete task with id:", _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`https://freelancer-task-server.vercel.app/tasks/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            setTasks(prevServices => prevServices.filter(service => service._id !== _id));

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center">My  Services</h2>

                {myServiceData.length === 0 ? (
                    <div className="text-center text-gray-500">
                        No Services For You.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead className="bg-base-200">
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myServiceData.map(service => (
                                    <tr key={service._id}>
                                        <td>{service.name}</td>
                                        <td>{service.category}</td>
                                        <td>{service.date}</td>
                                        <td>{service.price}</td>

                                        <td className="space-x-2">

                                            <button
                                                className="btn btn-sm btn-error"
                                                onClick={() => handleDelete(service._id)}
                                            >
                                                Delete
                                            </button>
                                            <Link to={`/updated/${service._id}`}>
                                                <button
                                                    className="btn btn-sm btn-warning"
                                                >
                                                    Update
                                                </button>
                                            </Link>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyService;