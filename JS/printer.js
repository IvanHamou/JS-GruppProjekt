const renderNorris = (values) => {
  $factDiv.forEach(($fact, index) => {
    const value = values[index];

    let factContent = createFactHTML(value);
    $fact.append(factContent);
  });
  $fact.append(`<h2>${value}</h2>`);
  //$icon.append(`<div>${icon_url[0]}</div>`);
};

const createNorrisHTML = (value) => {
  return `<h2>${value}</h2>`;
};
