export interface Commit {
    sha: string;
    commit: {
      message: string;
      author: {
        name: string;
        date: string;
      };
    };
}

export interface CommitsStore {
    commits: Commit[];
    error: string | null;
    loading: boolean;
    fetchCommits: () => Promise<void>;
}

export type CommitItemProps = {
  commit: Commit;
};

export type CommitButtonProps = {
  handleRefreshCommits: () => void;
}

export type CommitInputProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}
