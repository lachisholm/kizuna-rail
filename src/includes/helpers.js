/**
 * Generates a unique Japan Rail–like confirmation code for bookings.
 * @returns {string}
 */
const generateConfirmationCode = () => {
    return 'JR' + Math.random().toString(36).substring(2, 10).toUpperCase();
};

/**
 * Converts kilometers to miles.
 * @param {number} km
 * @returns {number}
 */
const kmToMiles = (km) => {
    const conversionFactor = 0.621371;
    return km * conversionFactor;
};

/**
 * Converts Japanese Yen to US Dollars.
 * @param {number} yen
 * @returns {number}
 */
const yenToUsd = (yen) => {
    const exchangeRate = 0.0066; // 1 Yen = 0.0066 USD
    return yen * exchangeRate;
};

/**
 * Converts a month number (1–12) into a three-letter abbreviation.
 * @param {number} month
 * @returns {string}
 */
const monthNumberToAbbrev = (month) => {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[month - 1] || '';
};

export {
    generateConfirmationCode,
    kmToMiles,
    yenToUsd,
    monthNumberToAbbrev
};
