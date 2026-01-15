import React, { useEffect, useState } from 'react'


function usefetch(api) {
     const [cart, setData] = useState([])
  const [err, seterr] = useState("")
  const [loading, setLoading] = useState(true)
     useEffect(() => {
        fetch(api)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Something went Wrong !")
            }
            return res.json()
          })
          .then((data) => {
            setData(data)
            setLoading(false)
          })
          .catch((error) => {
            seterr(error.message)
            setLoading(false)
          })
      }, [api])
  return {cart,loading,err};
  
}

export default usefetch