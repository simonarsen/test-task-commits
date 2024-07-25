'use client';
import '../../../styles/globals.css';
import { useCallback, useEffect, useState } from 'react';
import { useCommitsStore } from '@/store/useCommitsStore';
import { CommitItem } from '../CommitItem';
import { Commit } from '@/types';
import { handleRefresh } from './lib/handleRefresh';
import { CommitButton } from '@/components/shared/CommitButton';
import { CommitInput } from '@/components/shared/CommitInput';
import { Spinner } from '@/components/shared/Spinner';

const CommitList = () => {
  const { commits, error, loading, fetchCommits } = useCommitsStore();
  const [filteredCommits, setFilteredCommits] = useState<Commit[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    fetchCommits();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFilteredCommits((prevCommits) => [...prevCommits]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const filtered = commits.filter((commit) =>
      commit.commit.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCommits(filtered);
  }, [searchTerm, commits]);

  const handleRefreshCommits = useCallback(async () => {
    await handleRefresh(fetchCommits, setRefreshing);
  }, [fetchCommits]);

  if (loading) {
    return <div className="container mx-auto p-4 text-center"><Spinner /></div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 ">{error}</div>;
  }

  return (
    <>
      {commits.length > 0 && 
        <div className="max-w-4xl mx-auto p-5 font-sans">
          <h1 className="text-3xl text-center mb-6">
            <span className="text-blue-400">There are </span>
            <span className="text-black">{filteredCommits.length} commits</span>
          </h1>
          <div className="flex justify-center mb-6">
            <CommitInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          </div>
          <div className="flex justify-center mb-6">
            <CommitButton handleRefreshCommits={handleRefreshCommits}/>
            {refreshing && <div className="ml-4 text-blue-500">Refreshing...</div>}
          </div>
          <ul className="list-none">
            {filteredCommits.map((commit) => (
                <CommitItem key={commit.sha} commit={commit} />
            ))}
          </ul>
        </div>
      }
    </>
  );
};

export default CommitList;
