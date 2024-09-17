// app/workspace/components/ProfilePic.tsx
import React from 'react';

const ProfilePic: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 p-4">
      <img
        className="w-12 h-12 rounded-full"
        src="/path-to-your-profile-pic.jpg"
        alt="Profile Picture"
      />
      <div>
        <h2 className="text-white text-lg font-semibold">John Doe</h2>
        <p className="text-gray-400 text-sm">Developer</p>
      </div>
    </div>
  );
};

export default ProfilePic;
