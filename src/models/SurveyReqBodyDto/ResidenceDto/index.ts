export default interface ResidenceDto {
    residenceType: 'SINGLE' | 'COUPLE' | 'FAMILY';
    // 거주 형태
    isOnlyChild: number;
    // 외동 여부
    allBrothers: number;
    // 모든 형제
    allSisters: number;
    // 모든 자매
    myOrder: number;
    // 형제자매중 순서
    currentAddress: string;
    // 현재 거주지역
}
