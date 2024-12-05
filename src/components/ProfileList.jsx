import React from 'react';
import ProfileCard from './ProfileCard';

// ProfileList component to display a list of profiles
const ProfileList = ({ profiles, onLike, onEdit, onDelete }) => {
  return (
    // Container for the profile list with responsive grid classes
    <div className="profile-list grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {/* Map over the profiles array to render ProfileCard components */}
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id} // Unique key for each profile
          {...profile} // Spread operator to pass all profile properties as props
          onLike={() => onLike(profile.id)} // Pass the onLike handler with the profile id
          onEdit={() => onEdit(profile)} // Pass the onEdit handler with the profile object
          onDelete={() => onDelete(profile.id)} // Pass the onDelete handler with the profile id
        />
      ))}
    </div>
  );
};

export default ProfileList;
