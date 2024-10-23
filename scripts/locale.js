const langs = {};

langs.english = {
  loading: "Loading..."
};

langs.polish = {
  loading: "Ładowanie..."
};

var locale = {};

if (navigator.language == "pl") {
  locale = langs.polish;
} else {
  locale = langs.english;
}
