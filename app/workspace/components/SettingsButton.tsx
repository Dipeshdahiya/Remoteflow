// app/workspace/components/SettingsButton.tsx
import React from 'react';

const SettingsButton: React.FC = () => {
  return (
    <button className="absolute top-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-600">
      Settings
    </button>
  );
};

export default SettingsButton;
