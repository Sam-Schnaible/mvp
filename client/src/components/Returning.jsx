import React from 'react';

const Returning = ({toggleReturning, handleChange, handleSubmit}) => {

  return (
    <>
    <button className='button' onClick={() => toggleReturning()}>Back</button>
      <div className='form'>
      <h3>Coming back for more, eh?</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Player Name:
          <input type='text' required className='myInput'
          onChange={(e) => handleChange(e)}></input>
        </label>
        <button className='button'>Retrieve</button>
      </form>
      </div>
      </>

  )
};

export default Returning;