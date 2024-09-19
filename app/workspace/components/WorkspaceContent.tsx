// src/pages/workspace.tsx
import React from 'react';
import CoverImage from './workcontent/CoverImage';
import TopCont from './workcontent/topcont';
import TextCont from './workcontent/textcont';

const Workspace: React.FC = () => {
  return (
    <div className='w-full h-[100vh] overflow-hidden transform-all duration-300'>
      <CoverImage />
      <TopCont />
      <TextCont />
    </div>
  );
};

export default Workspace;
