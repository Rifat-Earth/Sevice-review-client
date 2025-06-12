import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const AddService = () => {
    useEffect(() => {
        document.title = "AddService | Service-review";
    }, []);

    const handleAddService = e => {
        e.preventDefault();
         const form = e.target;
        const formData = new FormData(form);
        const newService = Object.fromEntries(formData.entries())
        console.log(newService)

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
                <h1 className='text-2xl bold mb-6 font-bold'>Add New Service</h1>
            </div>
            <form onSubmit={handleAddService}>
                 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 mb-5 ">
                        <label className="label">Category</label>
                        <label className="select w-full">

                            <select name="category" className="select w-full">
                                <option>Bank</option>
                                <option>Car Service</option>
                                <option>Food Service</option>
                                <option>Travel Service</option>
                            </select>
                        </label>

                    </fieldset>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Service Title</label>
                        <input type="text " name="title" className="input w-full" placeholder="Title" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label">Service Image</label>
                        <input type="photo" name='photo' className="input  w-full" placeholder="photo" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label">Company Name</label>
                        <input type="text" name='name' className="input  w-full" placeholder="company name" />

                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label">Website</label>
                        <input type="text" name='website' className="input  w-full" placeholder="company name" />

                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label">Description</label>
                        <input type="text" name='description' className="input  w-full" placeholder="description" />

                    </fieldset>
                   

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label">Price</label>
                        <input type="text" name='price' className="input  w-full" placeholder="price" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">

                        <label className="label">Added Date</label>
                        <input type="date" name="date" className="input w-full" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4  ">

                        <label className="label ">User Email</label>
                        <input type="text" name='email' className="input  w-full" placeholder="email" />

                    </fieldset>
                    

                </div>
                <div className=' text-center'>
                    <button className='btn btn-primary mt-5 w-full '>Add Service</button>
                </div>
            </form>


        </div>
    );
};

export default AddService;