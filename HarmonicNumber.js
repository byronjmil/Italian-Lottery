const numberOfCoupons = 1000;

let harmonic = 0;

for (let i = 1; i <= numberOfCoupons; i += 1) {
    harmonic += (1 / i);
}

console.log(
    `The expected number of drawings to get all ${numberOfCoupons} coupons is ${Math.ceil(numberOfCoupons * harmonic)}`
);

/** Estimation for large numbers */

const harmonicEstimation = Math.log(numberOfCoupons) + 0.577;

console.log(
    `The expected number of drawings to get all ${numberOfCoupons} coupons is ${Math.ceil(numberOfCoupons * harmonicEstimation)}`
);