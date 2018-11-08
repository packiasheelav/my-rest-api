const express = require("express");
const router = express.Router();
const validateAlphabets=require('./stringOperation');
let countChar = require("./stringOperation");
const unique_char = require("./stringOperation");
const wordCounts = require("./stringOperation");
const generateKeys = require("./stringOperation");
const sortString=require('./stringOperation');

let validateInput=validateAlphabets.englishAlphabets;
let sortt=sortString.sortString;
let wordCount = wordCounts.wordCount;
let uniqueChar = unique_char.unique_char;
let countChars = countChar.countChar;
const generate_Key = generateKeys.generateKey;

router.post("/", (req, res) => {
  var jsontext = req.body;
  console.log(jsontext);
  let content = JSON.parse(JSON.stringify(jsontext));
  console.log("content.text", content.text);
  let txt = content.text;
  var rev = sortt(txt);
  let withNoDigits = txt.replace(/\d/g, '');
  console.log('withNoDigits',withNoDigits);
  var rev = sortt(withNoDigits);

  //check the input if it is only english alphabet
  console.log('validate the input ', validateInput(rev));

  //letter count with space
  let letterCount = txt.length;

  //lettercount without space
  str = txt.split(" ").join("");
  withoutSpace = str.length;

  //letter frequency
  console.log("rev", rev);
  unq_chars = uniqueChar(rev);
  console.log("character in a word", unq_chars);
  var char_array = [];
  for (var i = 0; i < unq_chars.length; i++) {
    console.log(unq_chars[i] + " : " + countChars(txt, unq_chars[i]));
    char_array.push(generate_Key(unq_chars[i], countChars(txt, unq_chars[i])));
  }

  console.log("ascending", char_array.sort());
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

  res.set("Content-Type", "application/json");
  res.send(string);
});

module.exports = router;
