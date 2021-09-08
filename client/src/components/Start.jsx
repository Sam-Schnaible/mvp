import React from 'react';

const Start = ({player, handleChange, handleSubmit}) => {

  //Make button with label 'returning player?' they can click on to go to different form
  //which performs a get request
  //thisi form will have enter player name which will get the player's name, score, and avg score
  //also include a back button


  return (
    <>
    <div className='form'>
      <h3>Are you ready to play?!</h3>
      <form onSubmit={() => handleSubmit()}>
        <label>
          Player Name:
          <input type='text' required className='myInput'
          onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <button className='button'>Create</button>
      </form>
    </div>
    </>
  )
};

export default Start;