import React, { useEffect, useState } from 'react';
import ShowQuote from './ShowQuote';


const Quote = () => {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('quote.json')
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, [])

    

    return (

        <div>
            <div className="divider my-20 mx-10 md:text-2xl">Some Quote</div>
            <div className='grid md:grid-cols-2 gap-10 mx-10'>
                {
                    quotes.map(quote => <ShowQuote key={quote._id} quote={quote} ></ShowQuote>)
                }
            </div>
        </div>
    );
};

export default Quote;