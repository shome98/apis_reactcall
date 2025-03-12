import axios from 'axios';
import React, { useEffect, useState } from 'react'

export interface IQoute{
    author?: string;
    content?: string;
    tags?: string[];
    authorSlug?: string;
    length?: number;
    dateAdded?: Date;
    dateModified?: Date;
    id?: number;
}

const Quotes = () => {
    const [qoutes, setQoutes] = useState<IQoute[]>([]);
    useEffect(() => {
        console.log("Quotes are: ", qoutes);
    }, [qoutes]); 
    const handleClick = async () => {
        //const url = 'https://api.freeapi.app/api/v1/public/meals?page=1&limit=10&query=rice';
        const url = 'https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human';
        //const options = { method: 'GET', headers: { accept: 'application/json' } };;

        try {
            // const response = await fetch(url, options);
            // const data = await response.json();
            const response = await axios.get(url);
            const data=response.data;
            console.log("the data is: ", data.data.data);
            setQoutes(data.data.data);
            //console.log("Qoutes are: ", qoutes);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div>Quotes</div>
            <button className='bg-amber-400 rounded-md text-black text-2xl' onClick={handleClick}>fetch them</button>
            {qoutes.length > 0 ? qoutes.map(quote => (
                <div key={quote.id} className='bg-amber-950 text-center'>
                    <h1 >{quote.content}</h1>
                    <h1>{quote.length}</h1>
                    <h1>{quote.author}</h1>
                    <h1>{quote.authorSlug}</h1>
                    <h1>{quote.tags}</h1>
                </div>
            )):<h1 className='bg-red-600 text-4xl text-black'>sorry no qoutes</h1>}
        </>
    
  )
}

export default Quotes