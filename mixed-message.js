const momJokesComponent = {
  members: ['mom', 'dad', 'grandpa', 'grandma'],
  adjectives: ['fat', 'old', 'ugly', 'stupid'],
  fatPhrases: ["when they fell I didn't laugh, but the sidewalk cracked up.", "when they skips a meal, the stock market drops.", "it took me two buses and a train to get to their good side.", "when they go camping, the bears hide their food.", "if they bought a fur coat, a whole species would become extinct."],
  stupidPhrases: ["they stared at a cup of orange juice for 12 hours because it said 'concentrate'.", "when they said it was chilly outside, they grabbed a bowl.", "they put lipstick on their forehead to make up her mind.", "they thought a quarterback was a refund.", "they bought a solar-powered flashlight."],
  oldPhrases: ["their memory is in black and white.", "they knew Gandalf before he had a beard.", "the back of they head look like a raisin.", "they had to see a DINOcologist.", "their last name is asaurus."],
  uglyPhrases: ["they threw a boomerang and it refused to come back.", "their social security number is one.", "they made a blind kid cry.", "they walked out of a museum and the alarm went off.", "when they walk into a bank, security had to turn off the cameras."]
};
const randomNumber = (arr) => {
  return Math.floor(Math.random() * arr.length);
}
const randomMember = () => {
  let randomIndex = randomNumber(momJokesComponent.members);
  return momJokesComponent.members[randomIndex];
}
const randomAdj = () => {
  let randomIndex = randomNumber(momJokesComponent.adjectives);
  return momJokesComponent.adjectives[randomIndex];
}
const randomPhrase = () => {
  let chosenAdj = randomAdj();
  let chosenMember = randomMember();
  let momJoke = `Your ${chosenMember} so ${chosenAdj}, `;
  switch (chosenAdj) {
    case "fat":
      momJoke += momJokesComponent.fatPhrases[randomNumber(momJokesComponent.fatPhrases)];
      break;
    case "old":
      momJoke += momJokesComponent.oldPhrases[randomNumber(momJokesComponent.oldPhrases)];
      break;
    case "ugly":
      momJoke += momJokesComponent.uglyPhrases[randomNumber(momJokesComponent.uglyPhrases)];
      break;
    case "stupid":
      momJoke += momJokesComponent.stupidPhrases[randomNumber(momJokesComponent.stupidPhrases)];
      break;
    default: break;
  }
  console.log(momJoke);
}
randomPhrase();