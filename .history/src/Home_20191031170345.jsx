import React from 'react';

function Home () {

    return (
        <h1>Home</h1>
        <>
        <h1>Main</h1>
        {props.quote}
        <button onClick={props.clickFunc}></button>
      </>   
    )
}

export default Home;