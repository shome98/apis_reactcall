import React, { useState } from 'react'

const Quotes = () => {
    const [quotes, setQoutes] = useState([]);
    const handleClick = async () => {
        const url = 'https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human';
        const options = { method: 'GET', headers: { accept: 'application/json' } };;

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log("the data is: ",data.data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
        
    }
    return (
        <>
            <div>Quotes</div>
            <button className='bg-amber-400 rounded-md text-black text-2xl' onClick={handleClick}>fetch them</button>
        </>
    
  )
}

export default Quotes