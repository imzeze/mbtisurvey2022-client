export default interface AlcoholDto {
    alcoholPerOnce: number;
    alcoholPerWeek: number;
    favoriteAlcohol:
        | 'SOJU'
        | 'BEER'
        | 'WINE'
        | 'MAKGEOLI'
        | 'BOARDCAKE'
        | 'COCKTAIL';
}
