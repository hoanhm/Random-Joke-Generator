const momJokesComponent = {
  members: ['mom', 'dad', 'grandpa', 'grandma'],
  adjectives: ['fat', 'old', 'ugly', 'stupid']
};
const randomNumber = () => {
  return Math.floor(Math.random() * 4);
}
const randomMember = () => {
  let random = randomNumber();
  return momJokesComponent.members[random];
}
const randomAdj = () => {
  let random = randomNumber();
  return momJokesComponent.adjectives[random];
}
const randomPhrase = () => {
  let chosenAdj = randomAdj();
  let chosenMember = randomMember();
  let momJoke = `Your ${chosenMember} so ${chosenAdj}! `;
  switch (chosenAdj) {
    case "fat":
      momJoke += "They need a logitude and latitude to find their own butthole.";
      break;
    case "old":
      momJoke += "Their last name is asaurus.";
      break;
    case "ugly":
      momJoke += "When they walk into a bank, security had to turn off the cameras.";
      break;
    case "stupid":
      momJoke += "They bought a solar-powered flashlight.";
      break;
    default: break;
  }
  console.log(momJoke);
}
randomPhrase();