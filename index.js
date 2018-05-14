var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments= ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
const facts =['He was the last Beatle to learn to drive', 'He was never a vegetarian', 'He was a choir boy and boy scout', 'He hated the sound of his own voice'];


function theBeatlesPlay(musicians, instruments) {
  var lineUp = [];
  for (let i = 0; i < musicians.length; i++) {
  lineUp.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return lineUp;
  }

function johnLennonFacts(facts) {
  var excitingFacts = [];
  let i = 0;
  while (i<facts.length) {
    
    excitingFacts.push(`${facts[i++]} !!!`);
    facts.length--;
  }
  return excitingFacts;
}

function iLoveTheBeatles(number) {
  var beatleLove = [];
  do {
    beatleLove.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return beatleLove;
}