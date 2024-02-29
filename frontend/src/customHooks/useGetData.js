import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (url, query, token) => {
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                    params: query,
                });
                setData(response.data);
                setError(null);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, query]);

    return { loading, data, error };
};

export default useGetData;
