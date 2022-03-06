export default interface CommonDto {
    gender: 'MALE' | 'FEMALE' | 'MTF' | 'FTM' | 'ETC';
    birth: number;
    personalColor: string;
    hobby:
        | 'SPORTS'
        | 'LANGUAGE'
        | 'INVESTING'
        | 'COOKING'
        | 'COMPUTER'
        | 'MUSIC'
        | 'PHOTOGRAPHY'
        | 'FASHION'
        | 'DIY'
        | 'MARKETING'
        | 'ART'
        | 'SUBJECT'
        | 'CODING'
        | 'FINANCE'
        | 'DANCE'
        | 'BUSINESS'
        | 'DATA'
        | 'ETC';
    smartphoneOS: 'ANDROID' | 'IOS' | 'ETC';
    politics: 'LEFT' | 'RIGHT' | 'MIDDLE';
    religion:
        | 'NONE'
        | 'CHRISTIAN'
        | 'CATHOLIC'
        | 'BUDDHIST'
        | 'MUSLIM'
        | 'WONBUDDHIST'
        | 'HINDUISM'
        | 'ETC';
}
