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
