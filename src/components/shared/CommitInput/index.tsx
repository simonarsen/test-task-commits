import React, { useEffect, useState } from 'react';
import { CommitInputProps } from '@/types';
import { useDebounce } from './lib/useDebounce';

export const CommitInput: React.FC<CommitInputProps> = ({ searchTerm, setSearchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const debouncedSearchTerm = useDebounce(localSearchTerm, 500);

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search commits..."
      value={localSearchTerm}
      onChange={(e) => setLocalSearchTerm(e.target.value)}
      className="p-2 w-80 border border-gray-300 rounded"
    />
  );
};
