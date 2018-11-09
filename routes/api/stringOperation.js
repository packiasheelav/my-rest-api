//check if it is english alphabets
function englishAlphabets(inputtxt) {
  var letters = /^[A-Za-z]+$/;
  if (letters.test(inputtxt)) {
    return true;
  } else {
    return false;
  }
}

//this is for word count
function wordCount(txt) {
  var word_count = txt.split(" ");
  var wordcount = 0;
  for (var word of word_count) {
    if (word !== "") {
      wordcount++;
    }
  }
  return wordcount;
}
function countChar(txt, char) {
  count = 0;
  for (var i = 0; i < txt.length; i++) {
    if (txt.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

function unique_char(str) {
  var uniql = "";
  for (var x = 0; x < str.length; x++) {
    if (str.charAt(x) == " ") {
      continue;
    }
    if (uniql.indexOf(str.charAt(x)) == -1) {
      uniql += str[x];
    }
  }
  return uniql;
}

function generateKey(k, value) {
  var json = { key: value };
  json[k] = json["key"];
  delete json["key"];
  return json;
}

function sortString(str) {
  var arr = str.split("");
  var sorted = arr.sort();
  return sorted.join("");
}

module.exports.englishAlphabets = englishAlphabets;
module.exports.sortString = sortString;
module.exports.countChar = countChar;
module.exports.unique_char = unique_char;
module.exports.wordCount = wordCount;
module.exports.generateKey = generateKey;
