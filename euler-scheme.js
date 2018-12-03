/*
 *    Euler Approximation Scheme Script
 *    Anthony Krivonos
 *    Prof. Kei Kobayashi
 *    9/25/2018
 */

/*
 *    Sample Function
 *    - Takes in (t, y) and returns a number.
 *    - Container for a math function to approximate.
 *    @param t Independent variable.
 *    @param y Dependent variable.
 *    @returns A calculation of F(t, y).
 */
let sampleFunction = (t, y) => {
      return t + Math.sin(y);
};

/*
 *    Euler Approximate
 *    - Takes in (t, y) and returns a number.
 *    - Container for a math function to approximate.
 *    @param func F(t, y) function.
 *    @param leftBoundT Left closed bound on t's domain.
 *    @param rightBoundT Right closed bound on t's domain.
 *    @param initialY Initial value satisfying y(leftBoundT).
 *    @param delta The step of the approximation.
 *    @returns An Euler approximation of F(t, y) within the provided bounds.
 */
let eulerApproximate = (func, leftBoundT, rightBoundT, initialY, delta) => {

      // Instantiate y(t) as IC.
      var t = leftBoundT;
      var y = initialY;

      // Variable for precise calculation below.
      const EPSILON = 10000000000;

      while (t < rightBoundT) {

            // y(t_(k + 1)) = F(t, y)(delta) + y(t_(k))
            y = func(t, y) * delta + y;

            // Increment t with epsilon precision
            t = Math.round((t + delta) * EPSILON)/EPSILON;
      }

      return y;
};


/*
 *    Lipschitz Alpha Approximate
 *    - Takes in (t, y) and returns a number.
 *    - Container for a math function to approximate.
 *    @param func F(t, y) function.
 *    @param leftBoundT Left closed bound on t's domain.
 *    @param rightBoundT Right closed bound on t's domain.
 *    @param initialY Initial value satisfying y(leftBoundT).
 *    @param delta The step of the approximation.
 *    @returns An Euler approximation of F(t, y) within the provided bounds.
 */
let lipschitzAlphaApproximate = (func, leftBoundT, rightBoundT, initialY, delta) => {

      // Variable for precise calculation below.
      const EPSILON = 10000000000;

      var Δ = 0.001;
      var run = 0;

      // Instantiate y(t) as IC.
      var t = leftBoundT;
      var y = initialY;

      while (run < 1) {
            y = Math.abs(func(t, y) - func(t, y) * delta + y)
            console.log(y);
            run = Math.round((Δ + run) * EPSILON)/EPSILON;
            Δ = Math.round((t + delta) * EPSILON)/EPSILON;
      }

      while (t < rightBoundT) {

            // y(t_(k + 1)) = F(t, y)(delta) + y(t_(k))
            y = func(t, y) * delta + y;

            // Increment t with epsilon precision
            t = Math.round((t + delta) * EPSILON)/EPSILON;
      }

      return y;

};

// Tests
console.log(lipschitzAlphaApproximate(sampleFunction, 0, 1, Math.PI/2, 0.0000001));
