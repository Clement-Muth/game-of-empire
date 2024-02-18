let haveIt = [0];

const generateUniqueRandom = (maxNr) => {
  let random = (Math.random() * maxNr).toFixed();

  random = Number(random);

  console.log("haveit:", haveIt, haveIt.length, maxNr + 1);
  if (!haveIt.includes(random)) {
    haveIt.push(random);

    return random;
  } else
    return (haveIt.length < maxNr + 1) ? generateUniqueRandom(maxNr) : false;
}

export default generateUniqueRandom;
