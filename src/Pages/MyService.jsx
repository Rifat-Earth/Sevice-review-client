import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';
import { useLoaderData } from 'react-router';

const MyService = () => {
    useEffect(() => {
        document.title = "MyService | Service-review";
    }, []);
    const data = useLoaderData()
    const { user, loading } = useContext(AuthContext)
    const [services, setServices] = useState([]);
    const [editService, setEditService] = useState(null);
    console.log(user.accessToken)

    
    const userEmail = user?.email;
    useEffect(() => {
        setServices(data);
    }, [data]);
    // console.log(data)
    const myServiceData = services.filter(
        service => service.email.toLowerCase() === userEmail?.toLowerCase()
    );

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

                fetch(`http://localhost:3000/services/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'user-email': user.email
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            setServices(prevServices => prevServices.filter(service => service._id !== _id));

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your services has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const updatedService = {
            name: form.name.value,
            category: form.category.value,
            price: form.price.value
        };
        fetch(`http://localhost:3000/services/${editService._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const updated = services.map(service =>
                        service._id === editService._id ? { ...service, ...updatedService } : service
                    );
                    setServices(updated);
                    setEditService(null);
                    Swal.fire("Updated!", "Service updated successfully.", "success");
                }
            });
    };


    return (
        <div>
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold mb-6 text-green-700 text-center">My  Services</h2>

                {myServiceData.length === 0 ? (
                    <div className="text-center text-gray-500">
                        No Services For You.
                    </div>
                ) : (
                    <div className="overflow-x-auto ml-16 ">
                        <table className="table table-zebra w-350 text-center">
                            <thead className="bg-green-100 ">
                                <tr>
                                    <th className='text-green-700'>Name</th>
                                    <th className='text-green-700'>Category</th>
                                    <th className='text-green-700'>Title</th>
                                    <th className='text-green-700'>Price</th>
                                    <th className='text-green-700'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myServiceData.map(service => (
                                    <tr key={service._id}>
                                        <td>{service.name}</td>
                                        <td>{service.category}</td>
                                        <td>{service.title}</td>
                                        <td>{service.price}</td>

                                        <td className="space-x-2">

                                            <button
                                                className="btn btn-sm btn-error"
                                                onClick={() => handleDelete(service._id)}
                                            >
                                                Delete
                                            </button>

                                            <button
                                                className="btn btn-sm btn-warning"
                                                onClick={() => {
                                                    setEditService(service);
                                                    document.getElementById('update_modal').showModal();
                                                }}
                                            >
                                                Update
                                            </button>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <dialog id="update_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Update Service</h3>
                        <form onSubmit={handleUpdate} className="space-y-3 mt-4">
                            <input type="text" name="name" defaultValue={editService?.name} placeholder="Name" className="input input-bordered w-full" />
                            <input type="text" name="category" defaultValue={editService?.category} placeholder="Category" className="input input-bordered w-full" />
                            <input type="text" name="title" defaultValue={editService?.title} placeholder="title" className="input input-bordered w-full" />
                            <input type="number" name="price" defaultValue={editService?.price} placeholder="Price" className="input input-bordered w-full" />

                            <div className="modal-action">
                                <button type="button" className="btn" onClick={() => document.getElementById('update_modal').close()}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>

    );
};

export default MyService;