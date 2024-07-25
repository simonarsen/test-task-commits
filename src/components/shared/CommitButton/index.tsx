import React from 'react';
import { CommitButtonProps } from "@/types";

export const CommitButton: React.FC<CommitButtonProps> = React.memo(({ handleRefreshCommits }) => {
    return (
      <button
        onClick={handleRefreshCommits}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh
      </button>
    );
})