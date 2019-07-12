//import React, {Component} from 'react';
import React from 'react';

/*class Card extends Component{
    render()
    {
        return(
            <div>
                <img alt ='robots' src='https://robohash.org/test' />
                <div>
                    <h2>Jane Doe</h2>
                    <p>Jane.doe@gmail.com</p>
                </div>
            </div>
        );
    }
} */

const Card = (props) =>{
    const {name , email , id} = props;
    return(

           <div className= 'tc bg-light-green dib br3 pa3 ma2 grow'>
                <img alt ='robots' src={`https://robohash.org/${id}?400*400`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
    );

}

export default Card;