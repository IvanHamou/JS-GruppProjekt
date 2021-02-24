// När användaren begär ny fact tas den gamla bort.
const executeSearch = () => {
  $factDiv.empty();

  // Hämtar infon vi vill ha och skriver ut det i vår mall.
  fetchNorris().then((values) => {
    return renderNorris(values);
  });
};

$submit.click(executeSearch);
