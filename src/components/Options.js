const options = [
  "in",
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];

const Options = ({ setCountry }) => {
  return (
    <select
      onChange={(e) => setCountry(e.target.value)}
      style={{
        border: "none",
        borderRadius: "5px",
        boxShadow: "rgba(195, 195, 195,25%) 1px 1px 10px",
        padding: "1px 8px",
        marginLeft: "10px",
        outline: "none",
        color: "#C100A2",
        fontSize: "15px",
        fontWeight: "bold",
      }}
    >
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Options;
