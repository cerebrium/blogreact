import React from 'react';

function Home (props) {

    return (
        <>
        <h1>Home</h1>
            <button onClick={props.clickFunc}>Add Quote</button>
        </>   
    )
}

export default Home;