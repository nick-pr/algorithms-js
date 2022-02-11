const randBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const randomData = (size, min, max) => {
    const result = [];
    for (let i = 0; i < size; i++) {
        const randomNum = randBetween(min, max);
        result.push(randomNum);
    }
    return result;
};

export { randomData, randBetween };
