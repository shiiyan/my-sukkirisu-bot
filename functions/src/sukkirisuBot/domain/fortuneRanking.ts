import {BirthMonthFortune} from "./birthMonthFortune";
import {InvalidArgumentError} from "./invalidArgumentError";

/**
 * Ranking of birth month fortune.
 *
 * @export
 * @class FortuneRanking
 */
export class FortuneRanking {
  private readonly createDate: Date;
  private readonly ranks: BirthMonthFortune[];
  private readonly ALL_MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  /**
   * Creates an instance of FortuneRanking.
   *
   * @param {BirthMonthFortune[]} list
   * @memberof FortuneRanking
   */
  constructor(list: BirthMonthFortune[]) {
    this.ensureRankCoversAllMonths(list);

    this.createDate = new Date();
    this.ranks = list;
  }

  /**
   * Factory method to create FortuneRanking.
   *
   * @static
   * @param {BirthMonthFortune[]} list
   * @return {FortuneRanking}
   * @memberof FortuneRanking
   */
  public static create(list: BirthMonthFortune[]): FortuneRanking {
    return new FortuneRanking(list);
  }

  /**
   * Get fortune by rank.
   *
   * @param {number} rank
   * @return {BirthMonthFortune}
   * @memberof FortuneRanking
   */
  public getFortuneByRank(rank: number): BirthMonthFortune | undefined {
    return this.ranks.find((fortune) => fortune.rank === rank);
  }

  /**
   * Get create date.
   *
   * @return {Date}
   * @memberof FortuneRanking
   */
  public getCreateDate(): Date {
    return this.createDate;
  }

  /**
   * Validation to ensure ranking covers all months.
   *
   * @private
   * @param {BirthMonthFortune[]} list
   * @memberof FortuneRanking
   */
  private ensureRankCoversAllMonths(list: BirthMonthFortune[]) {
    const monthSet = new Set(list.map((fortune) => fortune.birthMonth));

    if (monthSet.size !== this.ALL_MONTHS.length) {
      throw new InvalidArgumentError("Fortune Ranking does not cover all months.");
    }

    this.ALL_MONTHS.forEach((month) => {
      if (!monthSet.has(month)) {
        throw new InvalidArgumentError(`There is no fortune for month ${month}.`);
      }
    });
  }
}
