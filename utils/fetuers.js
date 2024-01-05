module.exports={

    getOfferPrice(originalPrice, discountPercentage) {
        if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
            return originalPrice;
        }
    
        const discount = (originalPrice * discountPercentage) / 100;
        const offerPrice = originalPrice - discount;
        return offerPrice;
    }

}