class GameEntry {
    /**
     * @param {string} platformId
     * @param {string} platformName
     * @param {boolean} specialEdition
     * @param {Date} boughtDate
     * @param {number} price
     * @param {string} seller
     * @param {boolean} physical
     * @param {string} comment
     */
    constructor(platformId,
                platformName,
                specialEdition,
                boughtDate,
                price,
                seller,
                physical,
                comment) {

        this.platformId = platformId;
        this.platformName = platformName;
        this.specialEdition = specialEdition;
        this.boughtDate = boughtDate;
        this.price = price;
        this.seller = seller;
        this.physical = physical;
        this.comment = comment;
    }
}
