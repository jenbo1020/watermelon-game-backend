import { PrizeField } from '../../common/PrizeField';
interface IChancePrizeItem {
  // 概率中奖的倍数,rewardType=chance时有
  chanceMultiple: number;
  // 概率奖品明细,rewardType=chance时有
  chancePrize: {
    // 概率奖品Id,来源于表FruitDrawPrize的_id
    prizeId: string;
  }[];
}

type IChancePrize = IChancePrizeItem & {
  // 类型-概率
  rewardType: 'chance' /*  */;
};

type IMustPrize = IChancePrizeItem & {
  // 类型-必中
  rewardType: 'must';
  // 必中奖品明细,rewardType=must时有
  mustPrize: PrizeField[];
};

export type TFruitDrawInviteConfigItem = IChancePrize | IMustPrize;
