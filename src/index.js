const elvenShieldRecipe = {
    leatherStrip: 2,
    ironIngot: 1,
    refinedMoonStone: 4
};

const elvenGauntletRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletRecipe);