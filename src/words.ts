export function getWordOfTheDay() {
  const now = new Date();
  const start = new Date(2022, 0, 0);
  const diff = Number(now) - Number(start);
  let day = Math.floor(diff / (1000 * 60 * 60 * 24));
  while (day > answers.length) {
    day -= answers.length;
  }
  return answers[day];
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
];

const allowedGuesses = ["برتاب", "طهران"];

export const allWords = [...answers, ...allowedGuesses];
