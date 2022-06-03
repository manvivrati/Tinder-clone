import React from 'react';
import './SwipeButtons.css';
import { FaSyncAlt } from 'react-icons/fa';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';

// use i tag with button in it as input
function SwipeButtons() {
    return (
        <div class="swipeButtons">
            <button class="swipeButtons_repeat">
                <FaSyncAlt size="30px" />
            </button>
            <button class="swipeButtons_left">
                <FaRegTimesCircle size="30px" />
            </button>
            <button class="swipeButtons_star">
                <FaStar size="30px" />
            </button>
            <button class="swipeButtons_right">
                <FaHeart size="30px" />
            </button>
            <button class="swipeButtons_lightning">
                <FaBell size="30px" />
            </button>
            
        </div>
    );
}

export default SwipeButtons;