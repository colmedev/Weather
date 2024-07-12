import { useState, useEffect, useCallback } from "react";

export type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};



export default function useFetch<T>(url: string) { 

  const [ state, setState ] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  })

  const FetchData = useCallback(async () => {
    try {
      const response = await fetch(url)

      if(!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }

      const result: T = await response.json();
      setState({ data: result, loading: false, error: null });
    } catch(error: any) {
      setState({data: null, loading: false, error: error.message || 'Unknown error' })
  }
}, [url])

  useEffect(() => {
    FetchData()
  }, [FetchData])

  return state
  
}