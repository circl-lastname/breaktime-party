const langs = {};

langs.english = {
  loading: "Loading..."
};

langs.polish = {
  loading: "Ładowanie..."
};

var locale = {};

if (navigator.language.startsWith("pl")) {
  locale = langs.polish;
} else {
  locale = langs.english;
}
