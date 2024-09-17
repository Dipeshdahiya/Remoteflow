// app/workspace/components/TrashSection.tsx
import React from 'react';

const TrashSection: React.FC = () => {
  return (
    <div className="absolute bottom-4 right-4 bg-red-500 text-white p-4 rounded-full">
      <p className="text-sm">Trash Bin</p>
    </div>
  );
};

export default TrashSection;
