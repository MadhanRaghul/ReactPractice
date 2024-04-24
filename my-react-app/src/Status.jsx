import React, { useEffect } from 'react'
import { useState } from 'react'

const Status = () => {

    const [status, setStatus] = useState("Heya")
    let name = "Hello"

    

    function testy(){
        setStatus(name)
    }

    useEffect(() => {console.log("pls work")}, [status])

  return (
    <>
        <p>{name}</p>
        <h1>Ello</h1>
        <button onClick={testy}>{status}</button>
    
    </>
  )
}

export default Status