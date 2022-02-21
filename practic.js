// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

const name = 'Delowar Hossen';
// name = 'Abdul kuddus';
// console.log(name);
let phone = 'iphone 13pro';
// console.log(phone);
phone = 'samsumg 21ultra';
// console.log(phone);
let phoneHas = { price: 15000, camera: '10mpx', color: 'black' };

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।

const massage = `My name is ${name}. I bya a phone that is ${phone}. It's price ${phoneHas.price}, camera ${phoneHas.camera}, color ${phoneHas.color}.`;
// console.log(massage);

// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।

const number = () => {
  const m = x / 5;
  return m;
};
// console.log(number((x = 25)));

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
const two = 2;
const add = (x, y) => (x + two) * (y + two);
// console.log(add(5, 5,));

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।

const multiply = (x, y, z) => x * y * z;
// console.log(multiply(3, 3, 3));

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।

const addMultiply = (x, y) => {
  const two = 2;
  const add = x + two;
  const add2 = y + two;
  const multiply = add * add2;
  return multiply;
};
// console.log(addMultiply(5, 5));

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

const array = [2, 3, 4, 5];
const array2 = array.map((array) => array * 5);
// console.log(array2);

// ........arrow function with return........
// const numbers = [2, 3, 4];
// const arr = numbers.map((num) => {
//   return num * 5;
// });
// console.log(arr);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = array.filter((array) => array % 2 == 1);
// console.log(array2);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const odds = arr.filter((number) => {
//   return number % 2 !== 0;
// });
// console.log(odds);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।
// This is for Mr. Gazi Bro.....
/* 
const mobileUser = [
  { name: 'jolimon', price: 4000 },
  {
    name: 'kolimon',
    price: 2000,
    color: {
      body: 'black',
      camara: '12',
    },
  },
  { name: 'lallu', price: 1000 },
  { name: 'kallu', price: 5000 },
  { name: 'tutut tu', price: 6000 },
];

let mobilePrice = mobileUser.find((x) => x.color.body === 'black');
console.log(mobilePrice);
 */
