// Här plockar vi ut önskad data ifrån API-fetch assignar datan till en variabel.
const renderNorris = (values) => {
  $factDiv.each(($fact) => {
    const value = values.value;
  });

   
  // Här stoppar vi in vår data i vår factDiv och skriver ut den i en H2 + animationer.

  $factDiv.append(`<h2>${values.value}</h2>`)
  .removeAttr("style")
  .animate({letterSpacing: "+=5px"})
  .animate({marginTop: "+=150px"}, 1000, "linear")
  
  
  
};

