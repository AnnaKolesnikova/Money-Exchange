// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    obj = {};

    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }
    else if (currency <= 0) {
        return obj;
    }

    let H = Math.trunc(currency / 50);
    let Q = Math.trunc((currency - H * 50) / 25);
    let D = Math.trunc((currency - H * 50 - Q * 25) / 10);
    let N = Math.trunc((currency - H * 50 - Q * 25 - D * 10) / 5);
    let P = currency - H * 50 - Q * 25 - D * 10 - N * 5;

    if (H != 0) {
        obj.H = H;
    }

    if (Q != 0) {
        obj.Q = Q;
    }

    if (D != 0) {
        obj.D = D;
    }

    if (N != 0) {
        obj.N = N;
    }

    if (P != 0) {
        obj.P = P;
    }

    return obj;

}
