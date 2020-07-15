// HackerRank Drawing Book Challenge
// Problem statement here
// https://hackerrank-challenge-pdfs.s3.amazonaws.com/22564-drawing-book-English?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1594785176&Signature=XelKOtqEqof%2FBL2KQG7%2BVyYl5H0%3D&response-content-disposition=inline%3B%20filename%3Ddrawing-book-English.pdf&response-content-type=application%2Fpdf

function pageCount(n, p) {
  const pageTurns = Math.floor(p / 2)
  const totalTurns = Math.floor(n / 2)

  return Math.min(pageTurns, totalTurns - pageTurns)
}

const count = pageCount(15, 2)
console.log(count)
