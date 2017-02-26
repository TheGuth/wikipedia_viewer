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
  populateList(appState);
};

function populateList(appState) {
  appState.pages.forEach((page) => {
    $(".results").append(`<a href="https://en.wikipedia.org/?curid=${page.pageid}"><li><h2>${page.title}</h2></li></a>`)
  });
}

function grabRandomArticle() {
  const randomUrl = "https://en.wikipedia.org/?curid="
  const pageNumber = Math.floor(Math.random()* 10,000).toString;
}

function eventListeners() {
$("")
}

$(()=> {
  searchWiki("word", wikiCallback);

});
