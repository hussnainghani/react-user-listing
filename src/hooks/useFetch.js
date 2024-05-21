import { useEffect, useState } from "react";

function useFetch(initialPage = 1, perPage = 10) {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(initialPage);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://randomuser.me/api/?page=${page}&results=${perPage}`);
            const data = await response.json();
            setUsers(data.results);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [page, perPage])

    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(page - 1);

    return { users, loading, error, nextPage, prevPage, page };
}

export default useFetch;
