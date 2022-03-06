export default interface LoveDto {
    loveCount: number;
    // 연애 횟수
    isLoveTarget: 'STRAIGHT' | 'HOMOSEXUAL' | 'BISEXUAL';
    // 연애 대상
    isInLove: boolean;
    // 현재 연애 여부
    isMarried: boolean;
    // 기혼 여부
    longestLoveTime:
        | '0TO3MONTHS'
        | '3TO6MONTHS'
        | '6TO12MONTHS'
        | '1TO3YEARS'
        | 'OVER3YEARS';
    // 가장 긴 연애 기간
}
