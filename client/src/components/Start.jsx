import React from 'react';

const Start = ({player, score, average}) => {

  //Make button with label 'returning player?' they can click on to go to different form
  //which performs a get request
  //thisi form will have enter player name which will get the player's name, score, and avg score
  //also include a back button


  return (
    <>
      <h3>Start</h3>
      <form onSubmit>
        <label>
          Player Name:
          <input type='text' required></input>
        </label>
        <button>Create</button>
      </form>
    </>
  )
};

export default Start;