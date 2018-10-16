const fisherYatesShuffle = (deck) => {
    if (!Array.isArray(deck)) {
        return [];
    }
    
    deck = [...deck];
    for (let i = deck.length - 1; i > 0; i--) {
        const swapIndex = Math.floor(Math.random() * (i + 1));
        const currentCard = deck[i];
        const cardToSwap = deck[swapIndex];
        deck[i] = cardToSwap;
        deck[swapIndex] = currentCard;
    }

    return deck;
};

export default fisherYatesShuffle;
