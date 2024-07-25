export const handleRefresh = async (fetchCommits: () => Promise<void>, setRefreshing: (state: boolean) => void): Promise<void> => {
    setRefreshing(true);
    try {
      await fetchCommits();
    } catch (err) {
      throw new Error('Something went wrong');  
    } finally {
      setRefreshing(false);
    }
};