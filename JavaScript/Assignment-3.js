function initializeScores() {
  return [85, 42, 78, 64, 90, 55, 39, 100, 75, 50];
}
function checkScore(score) {
  const passingScore = 50;
  return score >= passingScore;
}
function calculateTotalPassingScoresAndPassingCount(scores) {
  let totalPassingScore = 0;
  let passingCount = 0;
  for (let i = 0; i < scores.length; i++) {
    if (checkScore(scores[i])) {
      totalPassingScore = totalPassingScore + scores[i];
      passingCount++;
    }
  }
  return { totalPassingScore, passingCount };
}
function determineHighestScore(scores) {
  let highestScore = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
    }
  }
  return highestScore;
}
function countFailingStudents(scores) {
  let failCount = 0;
  for (let i = 0; i < scores.length; i++) {
    if (!checkScore(scores[i])) {
      failCount++;
    }
  }
  return failCount;
}
function calculateAveragePassingScore(totalPassingScore, passingCount) {
  return totalPassingScore / passingCount;
}
function main() {
  let scores = initializeScores();
  let { totalPassingScore, passingCount } =
    calculateTotalPassingScoresAndPassingCount(scores);
  let highestScore = determineHighestScore(scores);
  let failCount = countFailingStudents(scores);
  let averagePassingScore = calculateAveragePassingScore(
    totalPassingScore,
    passingCount
  );

  console.log("Total Passing Score:", totalPassingScore);
  console.log("Total number of Passing Students:", passingCount);
  console.log("Average Passing Score:", averagePassingScore);
  console.log("Highest Score:", highestScore);
  console.log("Number of Failing Students:", failCount);
}

main();
