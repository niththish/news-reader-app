import { createContext, useCallback, useEffect, useState } from "react";

export const newsContext = createContext();

const NewsContext = ({ children }) => {
  const [newsData, setNewsData] = useState();
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    const url = `${process.env.REACT_APP_NEWS_API_URL}everything?q=${searchText}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    console.log(url);
    const controller = new AbortController();
    const signal = controller.signal;

    if (searchText) {
      fetch(url, { signal }).then((val) => {
        val.json().then((data) => {
          setNewsData(data.articles);
        });
      });
    } else {
      setNewsData();
    }

    return () => {
      controller.abort();
    };
  }, [searchText]);

  const getNewsData = useCallback(
    (searchText) => {
      setSearchText(searchText);
    },
    [searchText]
  );

  return (
    <newsContext.Provider value={{ newsData, searchText, getNewsData }}>
      {children}
    </newsContext.Provider>
  );
};

export default NewsContext;
