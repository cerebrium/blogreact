import React from 'react';

function Home (props) {
    let mappedquotes = props.quote.map(ele => <p>{ele}</p>)
    return (
        <>
            <p>{mappedquotes}</p>
        </>    
    )
}

export default Home;