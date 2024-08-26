import Chance from 'chance';

const chance = new Chance();

export const fakeUserdata = () => {
    return { name: chance.name({ middle: true }) };
};