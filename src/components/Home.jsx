import React from 'react'

const Home = ({setPage}) => {
  return (
    <div>
        <h1>Utility Calculator Suite</h1>
        <h3>Choose a calculator</h3>

        <p>
           <span>➕ Standard Calculator</span> <br />
            <span>Basic arithmetic</span> <br />
          <button onClick={() => setPage("calculator")}>Open</button>
        </p>

        <p>
           <span>➕ BMI Calculator</span> <br />
            <span>Basic arithmetic</span> <br />
          <button onClick={() => setPage("bmi")}>Open</button>
        </p>

        <p>
           <span>➕ Age Calculator</span> <br />
            <span>Basic arithmetic</span> <br />
          <button onClick={() => setPage("age")}>Open</button>
        </p>

        <p>
           <span>➕ Tip Calculator</span> <br />
            <span>Basic arithmetic</span> <br />
          <button onClick={() => setPage("tip")}>Open</button>
        </p>

    </div>
  )
}

export default Home