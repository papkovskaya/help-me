module.exports = function count(s, pairs) {
  let N = 1;
  let result = 0;
  let mass = "";
  if (s.length > 5 || pairs.length > 8){
    return;
  }
  for (let i = 0; i < pairs.length; i++){
    if (pairs[i][1] < 10){
      N *= pairs[i][0];
    } else {
      return;
    }
  }

  let gcd = function (a, b) {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  };

  let n = N + s.length - 1;

  for (let k = 1; k <= n; k++){
    if (gcd(k, N) == 1) {
      mass += "1";
    } else {
      mass += "0";
    }
  }

  for (let k = 0; k < mass.length; k++) {
    if (mass[k] == s[0]){
      let temp = k;
      let check = true;
      for ( let j = 1; j < s.length; j++){
        k++;
        if (mass[k] != s[i]){
          check = false;
          break;
        }
      }

      if (check == true){
        result += 1;
      }
      k = temp;
    }
  }

  for (let i = 0; i < pairs.length; i++) {
    while (pairs[i][1] > 1) {
      result *= pairs[i][0];
      pairs[i][1] -= 1;
    } 
  }

  result = result % 1000000007;
  return result;
}

