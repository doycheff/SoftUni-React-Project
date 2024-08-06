import { useState, useEffect } from 'react';

export const useBuyerEmail = (productId) => {
    const [buyerEmail, setBuyerEmail] = useState('');

    useEffect(() => {
        const storedBuyerEmail = localStorage.getItem(`buyerEmail-${productId}`);
        if (storedBuyerEmail) {
            setBuyerEmail(storedBuyerEmail);
        }
    }, [productId]);

    const updateBuyerEmail = (email) => {
        setBuyerEmail(email);
        localStorage.setItem(`buyerEmail-${productId}`, email);
    };

    return [buyerEmail, updateBuyerEmail];
};

export const useHasBought = (productId) => {
    const [hasBought, setHasBought] = useState(false);

    useEffect(() => {
        const storedHasBought = localStorage.getItem(`hasBought-${productId}`);
        if (storedHasBought) {
            setHasBought(true);
        }
    }, [productId]);

    const updateHasBought = (bought) => {
        setHasBought(bought);
        localStorage.setItem(`hasBought-${productId}`, bought);
    };

    return [hasBought, updateHasBought];
};
