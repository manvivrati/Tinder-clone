import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import { useEffect } from 'react';
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data.people);
        }
        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing: " + nameToDelete);
        // setLastDirection(direction);
    };
    
    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };


    return (
        <div class="tinderCards">
            <div class="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard 
                        class='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)} >
                    
                        <div class="card" 
                            style={{backgroundImage: `url(${person.imgUrl})` }}>
                                <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            
        </div>
    );
}

export default TinderCards;