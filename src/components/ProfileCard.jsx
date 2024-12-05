import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faEnvelope, faGlobe, faHeart, faPenToSquare, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import specific icons from Font Awesome

// ProfileCard component to display individual user profiles
const ProfileCard = ({ username, name, email, phone, website, liked, onLike, onEdit, onDelete }) => {
    // Generate avatar URL based on username
    const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;

    return (
        // Container for the profile card with Tailwind CSS classes for styling
        <div className="profile-card border m-3.5 rounded" style={{ height: '408px' }}>
            <div className='w-full bg-neutral-100'>
                {/* Avatar image */}
                <img src={avatarUrl} alt={username} className="m-auto" style={{ height: '200px', width: '200px' }} />
            </div>
            <div className='p-6'>
                {/* User details */}
                <h3 className='font-medium text-lg'>{name}</h3>
                <p><FontAwesomeIcon icon={faEnvelope} className='mr-2' />{email}</p>
                <p><FontAwesomeIcon icon={faPhone} className='mr-2' />{phone}</p>
                <p><FontAwesomeIcon icon={faGlobe} className='mr-2' />{website}</p>
            </div>
            <div className='grid grid-cols-3 justify-items-center pt-3 border-t mt-1'>
                {/* Action icons: Like, Edit, Delete */}
                <FontAwesomeIcon icon={faHeart} onClick={onLike} style={{ color: liked ? 'red' : 'grey', cursor: 'pointer' }} className='w-full py-2' />
                <FontAwesomeIcon icon={faPenToSquare} onClick={onEdit} className='border-x w-full py-2' />
                <FontAwesomeIcon icon={faTrash} onClick={onDelete} className='w-full py-2' />
            </div>
        </div>
    );
};

export default ProfileCard;
