import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env. VITE_Image_Upload_Token;

const AddNovel = () => {

    const { register, handleSubmit, reset } = useForm();

    const [axiosSecure] = useAxiosSecure();

    const img_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse)
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {author, text, date } = data;
                const newItem = {author, text, date, image:imgURL}
                console.log(newItem);
                axiosSecure.post('/novel', newItem)
                .then(data =>{
                    console.log(data.data)
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }

    return (
        <div>
            <h1 className='text-center text-4xl my-10'>Review Novel and Movie</h1>
            <div className="w-full px-10">

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Place */}
                    <div className="form-control w-[800px] mb-4">

                        <label className="label">
                            <span className="label-text font-semibold">Place Name*</span>
                        </label>
                        <input type="text" placeholder="Place Name"
                            {...register("author", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>


                    {/* Place Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Place Description</span>
                        </label>
                        <textarea {...register("text", { required: true })} className="textarea textarea-bordered h-24" placeholder="Write Something"></textarea>
                    </div>

                    {/* Place Image */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Place Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>

                    

                    {/* Date */}
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Date*</span>
                        </label>
                        <input type="date" {...register("date", { required: true })} placeholder="Select date" className="input input-bordered w-full" />
                    </div>


                    <input className="btn btn-warning mt-4" type="submit" value="Add Item" /> <br /><br />
                </form>
            </div>
        </div>
    );
};

export default AddNovel;