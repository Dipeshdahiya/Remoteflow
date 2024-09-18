// src/pages/workspace.tsx
import React from 'react';
import CoverImage from './workcontent/CoverImage';
import TopCont from './workcontent/topcont';
import TextCont from './workcontent/textcont';

const Workspace: React.FC = () => {
  return (
    <div className='w-full h-[100vh] overflow-hidden'>
      <CoverImage defaultImage="/path/to/default-image.jpg" />
      <TopCont 
        defaultLogo="/path/to/default-logo.png" 
        defaultProfileImage="/path/to/default-profile-image.jpg" 
      />
      <TextCont />
    </div>
  );
};

export default Workspace;
