var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments= ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
const facts =['He was the last Beatle to learn to drive', 'He was never a vegetarian', 'He was a choir boy and boy scout', 'He hated the sound of his own voice'];


function theBeatlesPlay(musicians, instruments) {
  var lineUp = [];
  for (let i = 0; i > musicians.length; i++) {
  lineUp.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return;
  }

function johnLennonFacts(fact) {
  var excitingFacts = [];
  while (facts.length > 0) {
    --facts.length;
    excitingFacts.push(`${fact} !!!`);
  }
  return;
}

function iLoveTheBeatles(number) {
  let beatleLove = [];
  
}