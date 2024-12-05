import React, { useState, useEffect } from 'react';

// EditProfileModal component to edit user profile details
const EditProfileModal = ({ profile, onSave, onClose }) => {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  });

  // Update form data when the profile prop changes
  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  // Handle input changes and update form data state
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission and call onSave with the updated data
  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    // Overlay background
    <div className='fixed w-screen h-screen top-0 content-center bg-black/[0.65]'>
      {/* Modal container */}
      <div className="modal w-full bg-white flex flex-wrap m-auto border rounded justify-center items-center" style={{ width: '520px', height: '418px' }}>
        <div className='py-4 px-6 font-medium text-base'>
          <h1>Basic Modal</h1>
        </div>
        <div className="flex flex-wrap m-auto border-y justify-center items-center" style={{ height: '304px' }}>
          {/* Form fields */}
          <div className='w-full flex flex-wrap justify-center items-center gap-2'>
            <label htmlFor="name">Name: </label>
            <input name="name" value={formData.name} onChange={handleChange} className='border w-80 py-1 px-3 rounded' />
          </div>
          <div className='w-full flex flex-wrap justify-center items-center gap-2'>
            <label htmlFor="email">Email: </label>
            <input name="email" value={formData.email} onChange={handleChange} className='border w-80 py-1 px-3 rounded' />
          </div>
          <div className='w-full flex flex-wrap justify-center items-center gap-2'>
            <label htmlFor="phone">Phone: </label>
            <input name="phone" value={formData.phone} onChange={handleChange} className='border w-80 py-1 px-3 rounded' />
          </div>
          <div className='w-full flex flex-wrap justify-center items-center gap-2'>
            <label htmlFor="website">Website: </label>
            <input name="website" value={formData.website} onChange={handleChange} className='border w-80 py-1 px-3 rounded' />
          </div>
        </div>
        {/* Action buttons */}
        <div className='flex justify-end w-full mx-3 py-2'>
          <button onClick={onClose} className='px-4 py-1.5 mx-1 border rounded'>Cancel</button>
          <button onClick={handleSubmit} className='px-4 py-1.5 mx-1 border rounded bg-cyan-600 text-white'>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal; 