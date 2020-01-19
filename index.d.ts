declare module '@consento/shamirs-secret-sharing' {
  /**
   * Split a secret into a set of distinct shares with a configured threshold
   * of shares needed for construction.
   * @throws TypeError
   * @throws RangeError
   */
  declare function split (
    secret: string | Buffer,
    opts: {
      shares: number,
      threshold: number
      random?: (size: number) => Buffer
    }
  ): Buffer[]

  /**
   * Reconstruct a secret from a distinct set of shares.
   * @param {Array<String|Buffer>} shares
   * @return {Buffer}
   */
  declare function combine (shares: Buffer[]): Buffer
  export = {
    split,
    combine
  }
}
