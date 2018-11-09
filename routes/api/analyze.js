const express = require("express");
const router = express.Router();
const validateAlphabets = require("./stringOperation");
let countChar = require("./stringOperation");
const unique_char = require("./stringOperation");
const wordCounts = require("./stringOperation");
const generateKeys = require("./stringOperation");
const sortString = require("./stringOperation");

let validateInput = validateAlphabets.englishAlphabets;
let sortt = sortString.sortString;
let wordCount = wordCounts.wordCount;
let uniqueChar = unique_char.unique_char;
let countChars = countChar.countChar;
const generate_Key = generateKeys.generateKey;

router.post("/", (req, res) => {
  var jsontext = req.body;
  let content = JSON.parse(JSON.stringify(jsontext));
  res.setHeader("Content-Type", "application/json");
  if (validateInput(content.text.split(" ").join(""))) {
    let txt = content.text;
    var rev = sortt(txt);
    let withNoDigits = txt.replace(/\d/g, "");

    var rev = sortt(withNoDigits);

    //letter count with space
    let letterCount = txt.length;

    //lettercount without space
    str = txt.split(" ").join("");
    withoutSpace = str.length;

    //letter frequency
    unq_chars = uniqueChar(rev);
    var char_array = [];
    for (var i = 0; i < unq_chars.length; i++) {
      char_array.push(
        generate_Key(unq_chars[i], countChars(txt, unq_chars[i]))
      );
    }

    var json = JSON.stringify(char_array);

    //response
    var string =
      "{\n" +
      "            'textLength':{\"withSpaces\":" +
      letterCount +
      ',"withoutSpaces":' +
      withoutSpace +
      "},\n" +
      '            "wordCount":' +
      wordCount(txt) +
      ",\n" +
      '            "characterCount" :' +
      json +
      "\n" +
      "        }";

    res.send(string);
  } else {
    res.status(406).end('{ "error": "Only English Alphabets are allowed" }');
  }
});

module.exports = router;
