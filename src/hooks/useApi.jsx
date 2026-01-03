import { useEffect, useState } from "react"
import { baseAxios } from "../api/baseAxios"

function useApi() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const getData = async () => {
        setLoading(true)
        try {
            const response = await baseAxios()
            setData(response.data)
        } catch {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])
  return (
    {data, loading, error}
  )
}

export default useApi