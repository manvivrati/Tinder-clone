import React from 'react';
import "./Header.css";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import td from "./assets/Tinder.png";

function Header() {
    return (
        <div class='header'>
                        
            <button>
                < FaUser size="30px" class="header_icon" />
            </button>
            
            <div> 
                <img class="header_logo" src = {td} alt = ""/>  
            </div> 

            <button>
                < FaComments size="30px" class="header_icon" />
            </button>

        </div>
    );
}

export default Header;