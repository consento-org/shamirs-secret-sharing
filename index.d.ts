declare const sss: {
  /**
   * Generate a set of unique and distinct shares for a secret with a
   * configured threshold.
   *
   * @param secret Secret for which shares are created for. A string will be converted into a buffer.
   * @throws TypeError in case the secret is empty
   * @throws TypeError in case the secret is not a buffer or string
   * @throws TypeError in case either threshold or shares are not a number
   * @throws RangeError in case less 1 or more than 255 shares
   * @throws RangeError in case the threshold is lower than the number of shares
   */
  split (
    secret: string | Buffer,
    opts: {
      /**
       * Number of shares which are created, need to be more or equal to the threshold
       */
      shares: number
      /**
       * Number of shares required to restore the secret
       */
      threshold: number
      /**
       * Custom random buffer implementation to be used in place of the default implementation
       */
      random?: (size: number) => Buffer
    }
  ): Buffer[]

  /**
    * Reconstruct a secret from a distinct set of shares. This function _will
    * not_ throw an error for incorrect shares or if `p(0)` is not the correct
    * secret for the given shares.
    * 
    * Implementation Note: buffers will be converted into hex strings.
    *
    * @param shares An array of equally sized and distinct shares. Strings are expected to be hex encoded.
    */
  combine (shares: (Buffer|string)[]): Buffer
}

export = sss
