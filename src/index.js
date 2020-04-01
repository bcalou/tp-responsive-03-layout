// s = q => {
//   (n = 1), (r = []);
//   while (q-- && r.push(n)) n *= 2;
//   return r;
// };

// s = q => {
//   console.log(q.split(""));
//   for (r = [1], n = i = 1; n < q; i++) {
//     r[i] = n *= 2;
//   }
//   return;
// // };
s = q => new Array(q).fill(1).map((i, j) => j * j);

console.log(s(6));
