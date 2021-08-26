import React from 'react';

const Returning = (props) => {

  return (
    <>
      <h3>Coming back for more, eh?</h3>
      <form onSubmit>
        <label>
          Player Name:
          <input type='text' required></input>
        </label>
        <button>Retrieve</button>
      </form>
    </>
  )
};

export default Returning;