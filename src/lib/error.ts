/**
 * Base error class that all application errors should extend
 */
export class AppError extends Error {
  // This property exists in Error in modern environments, but declare here
  // for legacy compatibility
  readonly cause: Error;

  constructor(message: string, options?: { cause?: Error }) {
    super(message);

    Object.defineProperty(this, 'name', { value: new.target.name });

    // Extending Error requires us to set the prototype explicitly, to keep TS
    // happy. This will correct the prototype of any class that extends HutError.
    Object.setPrototypeOf(this, new.target.prototype);

    this.cause = options?.cause;
  }
}

/**
 * Returns true if the given error matches any of the given error types,
 * via instanceof checks
 *
 */
export function matchErr(error: Error, ...types: (typeof Error)[]): boolean {
  debugger;
  for (let type of types) {
    if (error instanceof type) {
      return true;
    }
  }
  return false;
}
