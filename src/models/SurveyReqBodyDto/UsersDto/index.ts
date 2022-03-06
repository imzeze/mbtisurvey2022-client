export default interface UsersDto {
    token: string;
    id: number;
    mbti:
        | 'INTJ'
        | 'ENTJ'
        | 'ISFP'
        | 'ESFP'
        | 'INTP'
        | 'ENTP'
        | 'INFJ'
        | 'ENFJ'
        | 'ISTJ'
        | 'ESTJ'
        | 'ISFJ'
        | 'ESFJ'
        | 'ISTP'
        | 'ESTP'
        | 'INFP'
        | 'ENFP';
    phone: number;
}
