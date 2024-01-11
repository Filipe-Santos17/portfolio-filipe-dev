import { useState, useCallback } from "react";

interface ApiInterface {
  route: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: object,
}

export default function ApiFetch() {
  const [dataContent, setDataContent] = useState([]) //<T | object>
  const [fetchStatus, setFetchStatus] = useState({
    loading: false,
    error: false,
  })

  const sendFetch = useCallback(async (apiContent: ApiInterface) => {
    try {
      setFetchStatus(oldStatus => ({
        ...oldStatus,
        loading: true,
        error: false,
      }));

      const request = await fetch(apiContent.route, {
        method: apiContent.method,

      })

      if (request.status === 200) {
        const dataJson = await request.json()

        setDataContent(dataJson)
      } else {
        throw new Error(`Error fetch: ${request.status}`)
      }
    } catch (e) {
      if (e instanceof Error) console.error("fetch data: " + e.message)

      console.error('Error Fetch:', e)

      setFetchStatus(old => ({
        ...old,
        error: true,
      }))
    } finally {
      setFetchStatus(old => ({
        ...old,
        loading: false,
      }));
    }
  }, [])

  return { data: dataContent, status: fetchStatus, send: sendFetch }
}
