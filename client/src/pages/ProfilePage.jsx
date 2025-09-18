import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'
const ProfilePage = () => {

const [selectedImage, setSelectedImage] = useState(null);
const navigate = useNavigate();
const [name, setName] = useState("Martin Johnson");
const [bio, setBio] = useState("hi everyone.");
const handleSubmit = async(event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to the server
    // After saving, navigate back to the main chat page
    navigate('/');
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-cover bg-no-repeat'>
        <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
            <h3 className='text-lg'>Profile Page</h3>
            <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
              <input onChange={(e) => setSelectedImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
              <img src={selectedImage ? URL.createObjectURL(selectedImage) : assets.avatar_icon}  alt="" className={`w-12 h-12 ${selectedImage&& 'rounded-full'} `} />
              upload profile image
            </label>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" required placeholder='Your Name' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-voilet-500' />
            <textarea onChange={(e) => setBio(e.target.value)} value={bio} placeholder="Write Profile Bio" className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-voilet-500' rows={4}></textarea>
            <button type="submit" className='py-3 bg-gradient-to-r rounded-full from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>Save</button>
          </form>
          <img src={assets.logo_icon} className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10' alt="" />
        </div>
    </div>
  )
}
  
export default ProfilePage
