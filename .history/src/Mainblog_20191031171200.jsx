import React from 'react';

function Mainblog (props) {
    let mappedquotes = props.quote.map(ele => <p>{ele}</p>)
    return (
        <>
            <h1>quotes</h1>
            <p>{mappedquotes}</p>
        </>    
    )
}

export default Mainblog;