# Persian Wordle

[Live demo](https://persian-wordle.netlify.app/)

An implementation of the [Wordle game](https://www.powerlanguage.co.uk/wordle/) in Persian. This is just for fun and doesn't aim to 100% replicate the original.

The words list is very short but I'm trying to add more words. If you want to add any words feel free to open a pull request.

This project is forked from [VWordle](https://vue-wordle.netlify.app/), made by the creator of Vue. I just changed it slightly so it is in Persian.

Made in Vue 3 and typescript.

This repository is open sourced for learning purposes only - the original creator(s) of Wordle own all applicable rights to the game itself.

Thanks to @LaLiLuLeLoLZ for some word insprations.
Using [PersianOcr](https://github.com/reza1615/PersianOcr) repo for more words inspiration.

Extracting the words from [PersianOcr](https://github.com/reza1615/PersianOcr) was done with a simple node.js app that would:
1. Filter only for 5 letter words
2. Filter out words containing abnormal letters
3. Turn the data into JSON
4. Divide the big json files into smaller ones for the last review
