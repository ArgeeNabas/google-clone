import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY

const CONTEXT_KEY = "26311c6b72b9c418f"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData();
    }, [term])

    return { data }
}

export default useGoogleSearch;