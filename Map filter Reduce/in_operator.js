// frequncy word count
const wordFrequency = (word) => {
  let wordArray = word.split(" ");
  let wordFrequencyObj = {};
  for (let eachWord of wordArray) {
    if (eachWord in wordFrequencyObj) {
      wordFrequencyObj[eachWord] += 1;
    } else {
      wordFrequencyObj[eachWord] = 1;
    }
  }
  return wordFrequencyObj;
};
const string = "hey man hey lol lol lol lol man spr god its work spr";
const result = wordFrequency(string);
console.log(result);

//letter frequency check

const frequencyCheck = (word) => {
  let freq = {};
  for (let letter of word) {
    if (letter in freq) {
      freq[letter] = freq[letter] + 1;
    } else {
      freq[letter] = 1;
    }
  }
  return freq;
};

const result_val = frequencyCheck("haha");
console.log(result_val);
