import React from 'react';

const Start = ({player, handleChange, handleSubmit}) => {

  //Make button with label 'returning player?' they can click on to go to different form
  //which performs a get request
  //thisi form will have enter player name which will get the player's name, score, and avg score
  //also include a back button


  return (
    <>
      <h3>Start</h3>
      <form onSubmit={() => handleSubmit()} >
        <label>
          Player Name:
          <input type='text' required
          onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <button>Create</button>
      </form>
    </>
  )
};

export default Start;