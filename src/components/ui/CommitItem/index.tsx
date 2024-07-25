import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { formatDate } from './lib/formatDate';
import { CommitItemProps } from '@/types';

export const CommitItem: React.FC<CommitItemProps> = ({ commit }) => {
  return (
    <li className="border border-gray-300 rounded p-4 mb-4 bg-gray-50 hover:bg-gray-100 transition">
      <div className="flex justify-between">
        <strong className="text-left">{commit.commit.message}</strong>
        <span className="text-gray-500 text-sm">{formatDate(commit.commit.author.date)}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-700 mt-2">
        <span>by {commit.commit.author.name}</span>
        <span className="text-gray-500">{formatDistanceToNow(parseISO(commit.commit.author.date))} ago</span>
      </div>
    </li>
  );
};
