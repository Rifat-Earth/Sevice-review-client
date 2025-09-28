import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';

const AddService = () => {
    useEffect(() => {
        document.title = "AddService | Service-review";
    }, []);

   const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-dots text-info"></span>
        </div>
    }


    const handleAddService = e => {
        e.preventDefault();
         const form = e.target;
        const formData = new FormData(form);
        const newService = Object.fromEntries(formData.entries())
        console.log(newService)
        newService.date = new Date().toISOString();

         fetch('http://localhost:3000/services',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
              if (data.insertedId) {
                    console.log('added successfully')
                    Swal.fire({
                        title: "Successfully Added!",
                        icon: "success",
                        draggable: true
                    });
                   
                }
                 e.target.reset();
        })

    }

    return (
        <div className='ml-12 mt-5 mb-5 w-11/12 items-center'>
            <div className='items-center text-center'>
                <h1 className='text-4xl mb-6 font-bold text-blue-700'>Add New Service</h1>
            </div>
            <form onSubmit={handleAddService}>
                 

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label text-green-700 text-xl">Service Title</label>
                        <input type="text " name="title" className="input border-green-700 w-full" placeholder="Title" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label text-green-700 text-xl">Service Image</label>
                        <input type="text" name='photo' className="input border-green-700 w-full" placeholder="photo" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label text-green-700 text-xl">Company Name</label>
                        <input type="text" name='name' className="input border-green-700  w-full" placeholder="company name" />

                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label text-green-700 text-xl">Website</label>
                        <input type="text" name='website' className="input border-green-700 w-full" placeholder="Website URL" />

                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label text-green-700 text-xl">Description</label>
                        <input type="text" name='description' className="input border-green-700 w-full" placeholder="description" />

                    </fieldset>
                   
                      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 mb-5 ">
                        <label className="label text-green-700 text-xl">Category</label>
                        <label className="select w-full border-green-700">

                            <select name="category" className="select w-full ">
                                <option>Bank</option>
                                <option>Car Service</option>
                                <option>Food Service</option>
                                <option>Travel Service</option>
                            </select>
                        </label>

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label text-green-700 text-xl">Price</label>
                        <input type="text" name='price' className="input border-green-700 w-full" placeholder="price" />

                    </fieldset>
                   
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4  ">

                        <label className="label text-green-700 text-xl">User Email</label>
                       
                        <input type="text" name='email' className="input border-green-700  w-full" defaultValue={user?.email} readOnly  />
                    
                    </fieldset>
                    

                </div>
                <div className=' text-center'>
                    <button className='btn bg-blue-700 mt-5 text-white w-full '>Add Service</button>
                </div>
            </form>


        </div>
    );
};

export default AddService;