export default interface ResidenceDto {
    residenceType: 'SINGLE' | 'COUPLE' | 'FAMILY';
    // 거주 형태
    isOnlyChild: '0' | '1';
    // 외동 여부
    allBrothers: number;
    // 모든 형제
    allSisters: number;
    // 모든 자매
    myOrder: number;
    // 형제자매중 순서
    currentAddress:
        | '02'
        | '031'
        | '032'
        | '033'
        | '041'
        | '042'
        | '043'
        | '044'
        | '051'
        | '052'
        | '053'
        | '054'
        | '055'
        | '061'
        | '062'
        | '063'
        | '064';
    // 현재 거주지역
}
