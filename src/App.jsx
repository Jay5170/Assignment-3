import React, { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList'; 
import EditProfileModal from './components/EditProfileModal';

const App = () => {
  const [profiles, setProfiles] = useState([]); // State to store profile data
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedProfile, setSelectedProfile] = useState(null); // State to store the profile being edited

  useEffect(() => {
    // Fetch profiles from API when component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Parse JSON data from response
      .then(data => {
        setProfiles(data); // Set profile data to state
      })
      .catch(error => console.error('Error fetching data:', error)); // Log any errors
  }, []); // Empty dependency array means this runs once on mount

  const handleLike = id => {
    // Toggle 'liked' state for a profile
    setProfiles(prevProfiles =>
      prevProfiles.map(profile => profile.id === id ? { ...profile, liked: !profile.liked } : profile)
    );
  };

  const handleEdit = profile => {
    // Open modal and set the selected profile for editing
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleDelete = id => {
    // Delete profile by filtering it out of the state
    setProfiles(prevProfiles => prevProfiles.filter(profile => profile.id !== id));
  };

  const handleSave = updatedProfile => {
    // Update profile in state and close modal
    setProfiles(prevProfiles =>
      prevProfiles.map(profile => (profile.id === updatedProfile.id ? updatedProfile : profile))
    );
    setIsModalOpen(false);
  };

  const handleClose = () => {
    // Close modal without saving changes
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      {/* Render ProfileList with necessary props */}
      <ProfileList profiles={profiles} onLike={handleLike} onEdit={handleEdit} onDelete={handleDelete} />
      {/* Conditionally render EditProfileModal if modal is open and a profile is selected */}
      {isModalOpen && selectedProfile && (
        <EditProfileModal profile={selectedProfile} onSave={handleSave} onClose={handleClose} />
      )}
    </div>
  );
};

export default App;
