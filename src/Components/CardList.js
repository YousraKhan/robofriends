import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    /* const CardComponent = robots.map((user,i) => {
         return(
 
             
             <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}  />
 
         );
     }) */

    return (
        <div>
            {
                robots.map((thisRobot,i) => {
                    return (
                        <Card key={i} id={thisRobot.id} name={thisRobot.name} email={thisRobot.email} />
                    );
                })
            }
        </div>
    );
}

export default CardList;