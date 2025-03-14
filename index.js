let x = 5;
while (x < 3) {
  console.log(x);
  x++;
}
// Ans.(c) No Output

let y = 0;
do {
  console.log(y);
  y++;
} while (y < 2);
// Ans.(b) 0,1

// 3.Ans(b)  do...while loops execute at least once, while while loops may not execute at all.

let count = 5;
do {
  console.log(count);
  count--;
} while (count > 0);
//  Ans (a) 5,4,3,2,1

// 5. Ans (b) do..while loop

let z = 0;
while (z < 3) {
  console.log(z);
  z++;
}
// Ans.(b) 0,1,2

// 7. Ans.(a) The while loop checks the condition before the code block runs, while the do...while loop checks the condition after.

let i = 0;
while (i < 5) {
  console.log(i);
  if (i === 3) break;
  i++;
}
// Ans.(b) 0,1,2,3

// 9. Ans.(b) do { // code } while (condition);

// 10. Ans
let a = 0;
do {
  console.log(a);
  a++;
} while (a < 0);
// Ans. (a) 0

// 1. Ans
let b = 1;
while (b <= 5) {
  console.log(b);
  b++;
}
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// 2. Ans
let c = 1;

while (c <= 5) {
  console.log(c);
  if (c === 3) {
    break;
  }
  c++;
}

console.log("Loop exited.");

// 3. Ans
let d = 1;
while (d <= 10) {
  d++;
  continue;
}
let f = 1;
do {
  f++;
  continue;
} while (f <= 10);

// 4. Ans
let k = 0;

while (k <= 20) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k++;
}

// 1. Ans
let number = 27;

if (number > 10) {
  console.log("Number is greater than 10");
}

// 2. Ans
let num = 6;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. Ans
let grade = 96;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// 4. Ans
let num1 = 6;

if (num1 > 0) {
  console.log("The number is positive.");
  if (num1 % 2 === 0) {
    console.log("It is even.");
  } else {
    console.log("It is odd.");
  }
} else {
  console.log("The number is not positive.");
}

// 5. Ans
let age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// 6. Ans
let num2 = 55;

if (num2 >= 10 && num2 <= 20) {
  console.log("In range");
} else {
  console.log("Out of range");
}

// 7. Ans
// == (Equality operator): Compares two values for equality but performs type coercion if the types differ. It converts the values to a common type before comparison.

// === (Strict equality operator): Compares two values for equality without type coercion. The values must be of the same type to be considered equal.
let value1 = 5;
let value2 = "5";

// Using ==
if (value1 == value2) {
  console.log("==: Values are equal.");
}

// Using ===
if (value1 === value2) {
  console.log("===: Values are equal.");
} else {
  console.log("===: Values are NOT equal."); // This will be printed because the types (number and string) are different.
}

// 8. Ans
let numb = 45;

if ((numb >= 10 && numb <= 20) || numb === 30) {
  console.log("Condition met");
} else {
  console.log("Condition not met");
}