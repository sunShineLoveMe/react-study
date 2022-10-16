import React, { useEffect, useState } from 'react'

function AsyncPage({name}) {
    const [loading, setLoading] = useState()
    const [person, setPerson] = useState({})

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            setPerson({name})
        }, 2000);
    })

    return (
        loading? <div>Loading....</div>:<div>{person.name}</div>
    )
}

export default function Home1() {
    const [name, setName] = useState('Bob')

    const changeName = (name) => {
        setName(name)
    }

    return (
        <div>
            <AsyncPage name={name}/>
            <button onClick={() => changeName('jack')}>将名字改成jack</button>
            <button onClick={() => changeName('tom')}>将名字改成tom</button>
        </div>
    )
}
