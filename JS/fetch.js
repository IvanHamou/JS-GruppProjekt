async function fetchNorris() {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`);
  const norrisData = await response.json();
  console.log(norrisData);
  return norrisData;
}

fetchNorris();

const $submit = $("#button");
const $factDiv = $("#fact1");
