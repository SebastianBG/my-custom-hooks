import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {
    
    
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null, loading: true, error: null
    });

    useEffect(() => {
        return () =>{
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        fetch(url)
            .then( resp=> resp.json() )
            .then ( data =>{
                isMounted.current && setState({data: data, loading: false, error: null })
            })
            .catch( ()=>  {
                setState({
                    data: null,
                    loading: false,
                    error: 'no se pudo cargar la info'
                })
            })
    }, [url])

    return state;
}
