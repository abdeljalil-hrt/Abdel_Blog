import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("error 404");
                    } else {
                        return res.json();
                    }
                })
                .then(dat => {
                    setData(dat);
                    SetLoading(false);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("abort")
                    } else {
                        setError(err.message);
                        SetLoading(false);
                    }
                })
        }, 1000)

        return () => abortCont.abort();
    }, [url])
    return { data, error, loading }
}

export default useFetch;