let t1 = [1, 2, 2, 3, 4, 4, 5];
t2 = [];
let find = 0;
let k = 0;
for (let i = 0; i < t1.length - 1; i++) {
  for (let j = 1; j < t2.length; j++) {
    if (t1[i] == t2[j]) find = 1;
  }
  if (find == 0) {
    t2[k] = t1[i];
    k++;
  }
  find = 0;
}
