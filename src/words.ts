/**
 *
 * @returns The number of today's wordle. Starting from the start of 2022
 */
export function getNumberOfWordle() {
  const milisecondsInADay = 1000 * 60 * 60 * 24;
  const now = new Date();
  const start = new Date(2022, 0, 0);
  const diff = Number(now) - Number(start);
  const day = Math.floor(diff / milisecondsInADay);
  return day;
}

export function getWordOfTheDay() {
  let day = getNumberOfWordle();
  while (day > answers.length) {
    day -= answers.length;
  }

  const todayAnswer = answers[day];
  console.log(todayAnswer);
  return todayAnswer;
}

const answers = [
  "کمینه",
  "بوسید",
  "مریضی",
  "تهران",
  "بالشت",
  "ژیوان",
  "استاد",
  "پرتاب",
  "منتهی",
  "نابغه",
  "شیراز",
  "قورمه",
  "البسه",
];

// These are allowed but they're never the answer
const allowedGuesses = ["برتاب", "طهران", "نبوغی", "گریید"];

export const allWords = [...answers, ...allowedGuesses];
