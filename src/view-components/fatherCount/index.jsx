import React, { useState } from 'react'
import SonCount from '../sonCount'

export default function useFatherCount() {

    const [ count, setCount ] = useState(1)
    
    return (
        <div>
            <SonCount initialCount = {count}></SonCount>
        </div>
    )
}
