import axios from "axios";

export const fetchCommitsFromGithub = async () => {
    try {
        const response = await axios.get('/api/commits');
        return response.data;
    } catch (err) {        
        throw new Error ('Failed to fetch commits');
    }
};
  