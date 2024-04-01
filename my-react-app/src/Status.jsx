import React from 'react'
import { useState } from 'react'

const Status = () => {

    const [status, setStatus] = useState("Heya")
    const name = 'notu'


    function testy(){
        setStatus(name)
    }


  return (
    <>
        <h1>Ello</h1>
        <button onClick={testy}>{status}</button>
    
    </>
  )
}

export default Status