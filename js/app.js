const wikipediaUrl = "https://en.wikipedia.org/w/api.php?callback=?";
// const wikipediaUrl =https://en.wikipedia.org/w/api.php?action=query&generator=allpages&gaplimit=10&gapfrom=World&prop=links|categories
const appState = {
    pages: [],
};

const query = {
  format: "json",
  action: "query",
  titles: "",
  generator: "allpages",
  gaplimit: 10,
  prop: "info|",
}

function searchWiki(item, callback) {
  query.gapfrom = item;
  $.getJSON(wikipediaUrl, query, callback)
};

function wikiCallback (data) {
  const idKeys = Object.keys(data.query.pages);
  idKeys.forEach( id => {
    appState.pages.push(data.query.pages[id]);
  });
  console.log(appState.pages);

};

$(()=> {
  searchWiki("word", wikiCallback);
});
