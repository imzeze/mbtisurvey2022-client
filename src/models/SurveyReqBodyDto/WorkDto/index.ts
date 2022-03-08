export default interface WorkDto {
    isEmployed: '0' | '1';
    job:
        | '1'
        | '2'
        | '3'
        | '4'
        | '5'
        | '6'
        | '7'
        | '8'
        | '9'
        | '10'
        | '11'
        | '12'
        | '13'
        | '14'
        | '15'
        | '16'
        | '17'
        | '18'
        | '19'
        | '20'
        | '21'
        | '22'
        | '23'
        | '24';
    income: string; // todo: enum 정리
    firstWorkYear: number;
}
