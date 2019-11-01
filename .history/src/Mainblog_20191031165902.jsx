import React from 'react';

function Home (props) {

    return (
        <>
            <h1>Main</h1>
            {props.quote}
            <button onClick={props.clickFunc}></button>
        </>    
    )
}

export default Home;