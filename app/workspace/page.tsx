// app/workspace/page.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import ProfilePic from './components/ProfilePic';
import LeftBar from './components/LeftBar';
import WorkspaceContent from './components/WorkspaceContent';
import TrashSection from './components/TrashSection';
import SettingsButton from './components/SettingsButton';

const WorkspacePage: React.FC = () => {
  return (
    <div className="min-h-screen flex cursor-default">
      <Sidebar />
      <div className="flex-grow flex flex-col">

        <div className="flex flex-grow">
          <LeftBar />
          <WorkspaceContent />
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
