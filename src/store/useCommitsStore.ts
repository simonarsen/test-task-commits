import { create } from 'zustand';
import { fetchCommitsFromGithub } from '../lib/github';
import { CommitsStore } from '@/types';

export const useCommitsStore = create<CommitsStore>((set) => ({
    commits: [],
    error: null,
    loading: false,
    fetchCommits: async () => {
      set({ loading: true, error: null });
      try {
        const commits = await fetchCommitsFromGithub();
        set({ commits, error: null, loading: false });
      } catch (error) {
        set({ commits: [], error: 'Failed to fetch commits', loading: false });
      }
    },
  }));
