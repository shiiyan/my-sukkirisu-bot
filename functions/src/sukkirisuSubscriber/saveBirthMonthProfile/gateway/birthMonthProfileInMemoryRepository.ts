import { BirthMonthProfile, BirthMonthProfileRepositoryInterface } from "@shiiyan/sukkirisu-function-core-domain";

/**
 * Save birth month profile in memory for testing.
 *
 * @export
 * @class BirthMonthProfileInMemoryRepository
 * @implements {BirthMonthProfileRepositoryInterface}
 */
export class BirthMonthProfileInMemoryRepository implements BirthMonthProfileRepositoryInterface {
  private data: BirthMonthProfile[] = [];

  /**
   * Save birth month profile to this.data.
   *
   * @param {BirthMonthProfile} birthMonthProfile
   * @return {Promise<void>}
   * @memberof BirthMonthProfileInMemoryRepository
   */
  save(birthMonthProfile: BirthMonthProfile): Promise<void> {
    this.data.push(birthMonthProfile);
    return new Promise((resolve) => resolve());
  }

  /**
   * Find first BirthMonthProfile in this.data.
   *
   * @return {*}  {BirthMonthProfile}
   * @memberof BirthMonthProfileInMemoryRepository
   */
  findFirst(): BirthMonthProfile {
    return this.data[0];
  }
}
