// src/components/CaseOpening.js
import React, { useState } from 'react';
import './CaseOpening.css';

const CaseOpening = () => {
    const caseItems = [
        { name: 'Item A', rarity: 'Common' },
        { name: 'Item B', rarity: 'Uncommon' },
        { name: 'Item C', rarity: 'Rare' },
        { name: 'Item D', rarity: 'Epic' },
        { name: 'Item E', rarity: 'Legendary' },
        { name: 'Item A', rarity: 'Common' },
        { name: 'Item B', rarity: 'Uncommon' },
        { name: 'Item C', rarity: 'Rare' },
        { name: 'Item D', rarity: 'Epic' },
        { name: 'Item E', rarity: 'Legendary' },
        { name: 'Item A', rarity: 'Common' },
        { name: 'Item B', rarity: 'Uncommon' },
        { name: 'Item C', rarity: 'Rare' },
        { name: 'Item D', rarity: 'Epic' },
        { name: 'Item E', rarity: 'Legendary' },
    ];

    const [openedItem, setOpenedItem] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const openCase = () => {
        setIsAnimating(true);

        // Simulate a spinning animation
        let spinInterval;
        let spinCount = 0;
        spinInterval = setInterval(() => {
            setSelectedItemIndex(spinCount % caseItems.length);
            spinCount++;
        }, 100);

        // Simulate stopping the animation after a delay
        setTimeout(() => {
            clearInterval(spinInterval);
            setIsAnimating(false);
            setOpenedItem(caseItems[selectedItemIndex]);
        }, 3000); // Simulate a 3-second animation
    };

    return (
        <div className="case-opening">
            <h2>Case Opening</h2>
            <button onClick={openCase} disabled={isAnimating}>
                Open Case
            </button>
            <div className={`case-animation ${isAnimating ? 'animate' : ''}`}>
                <div className="box-container">
                    {caseItems.map((item, index) => (
                        <div className={`item-box ${index === selectedItemIndex ? 'selected' : ''}`} key={index}>
                            {item.name}
                        </div>
                    ))}
                </div>
                {isAnimating ? <div className="spinner"></div> : null}
                {openedItem && (
                    <div className="result">
                        <h3>You've received:</h3>
                        <p>Name: {openedItem.name}</p>
                        <p>Rarity: {openedItem.rarity}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaseOpening;
