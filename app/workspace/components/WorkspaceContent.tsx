// app/workspace/components/WorkspaceContent.tsx
import React from 'react';

const WorkspaceContent: React.FC = () => {
  return (
    <div className="flex-grow p-8">
      <h1 className="text-3xl font-semibold mb-6">Workspace</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg">
          This is the main workspace where your content will appear.
        </p>
      </div>
    </div>
  );
};

export default WorkspaceContent;
