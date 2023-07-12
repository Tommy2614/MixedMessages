//The use of Math.floor and Math.random are used to run through each case and pick a random number between 1 and 10 to give the user a quote
//By setting 0 to the function this allows the swtich statement to run through the list of quotes to generate a random quote when inpirations is called
let randomNumW = Math.floor(Math.random() * 4);
let randomNumBD = Math.floor(Math.random() * 3);
let randomNumIN = Math.floor(Math.random() * 10);

//first part of message
let welcome = 'Welcome, we know why your here';
switch (randomNumW) {
  case randomNumW = 0:
  console.log(welcome);
  break;
  case randomNumW = 1:
  console.log('You have entered. We have much to offer!');
  break;
  case randomNumW = 2:
  console.log('Hi there friend...');
  break;
  case randomNumW = 3:
  console.log('Greetings wise one.');
  break;
  case randomNumW = 4:
  console.log('Hola mi amigo.');
  break;
}


//second part of message
let badDay = 'Bad Day huh? Take a look below';
switch (randomNumBD) {
  case randomNum = 0:
  console.log(badDay);
  break;
  case randomNumBD = 1:
  console.log('Having an amazing day? Take a look below.');
  break;
  case randomNumBD = 2:
  console.log('Need some feel good feeling? Take a look below.');
  break;
  case randomNumBD = 3:
  console.log('I got you! Take a look below.');
  break;
}



//The Mixed Messages project will allow a used to generate random inspirational quotes. This will be achieved with Math.floor and switch case.
const userIntQte = 'Your quote of the day!'; 

console.log(userIntQte)
//The last part of the message
let inspiration = '"Inspiration is free" Your creator';
switch (randomNumIN) {
  case randomNumIN = 0:
  console.log(inspiration);
  break;
  case randomNumIN = 1:
  console.log('“Energy and persistence conquer all things.” Benjamin Franklin');
  break;
  case randomNumIN = 2:
  console.log('“Nothing will work unless you do.” Maya Angelou');
  break;
  case randomNumIN = 3:
  console.log('“Action is the foundational key to all success.” Pablo Picasso');
  break;
  case randomNumIN = 4:
  console.log('“The path to success is to take massive, determined action.” Tony Robbins');
  break;
  case randomNumIN = 5:
  console.log('“Life is about making an impact, not making an income.” Kevin Kruse');
  break;
  case randomNumIN = 6:
  console.log('“Whatever the mind of man can conceive and believe, it can achieve.” Napoleon Hill');
  break;
  case randomNumIN = 7:
  console.log('“Strive not to be a success, but rather to be of value.” Albert Einstein');
  break;
  case randomNumIN = 8:
  console.log('“Every strike brings me closer to the next home run.” Babe Ruth');
  break;
  case randomNumIN = 9:
  console.log('“I dont walk away from things I think are unfinished.” Arnold Schwarzenegger');
  break;
  case randomNumIN = 10:
  console.log('“A person who never made a mistake never tried anything new.” Albert Einstein');
  break;
}

