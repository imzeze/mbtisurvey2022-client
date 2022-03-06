import AlcoholDto from './AlcoholDto';
import CommonDto from './CommonDto';
import EtcDto from './EtcDto';
import LoveDto from './LoveDto';
import ResidenceDto from './ResidenceDto';
import UsersDto from './UsersDto';
import WorkDto from './WorkDto';

export default interface SurveyReqBodyDto {
    users: UsersDto;
    common: CommonDto;
    work: WorkDto;
    alcohol: AlcoholDto;
    love: LoveDto;
    residence: ResidenceDto;
    etc: EtcDto;
}
