import React from 'react';

function Home (props) {

    return (
        <>
        <h1>Home</h1>
            <h1>Main</h1>
            <button onClick={props.clickFunc}>Add Quote</button>
        </>   
    )
}

export default Home;