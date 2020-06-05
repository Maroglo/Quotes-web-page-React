import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/static/site.css";
import "./style.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";
import PlacesData from "./PlacesData";
import PlacesDetail from "./PlacesDetail";
import {ConfigContext} from "./App.js";
import placesReducer from "./PlacesReducer";

const Places = ({}) => {
  const [quotesSaturday, setQuotesSaturday] = useState(true);
  const [quotesSunday, setQuotesSunday] = useState(true);
  const [quotesList, dispach]  = useReducer(placesReducer,[]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(ConfigContext);
 
  useEffect(() => {
    setIsLoading(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = PlacesData.filter(({ sat, sun }) => {
        return (quotesSaturday && sat) || (quotesSunday && sun);
      });
     dispach({
       type: "setQuotesList",
       data: speakerListServerFilter
     });
    });
    return () => {
      console.log("cleanup");
    };
  }, []); // [quotesSunday, quotesSaturday]);

  const handleChangeSaturday = () => {
    setQuotesSaturday(!quotesSaturday);
  };
  const newQuotesList = useMemo(() => quotesList
  .filter(
    ({ sat, sun }) => (quotesSaturday && sat) || (quotesSunday && sun)
  )
  .sort(function(a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  }), [quotesSaturday, quotesSunday, quotesList]);

  const quotesListFiltered = isLoading
    ? []
    : newQuotesList;
  const handleChangeSunday = () => {
    setQuotesSunday(!quotesSunday);
  };

  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    dispach({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId
    });
    //console.log("changing session favorte to " + favoriteValue);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
        {context.showPlacesForDays === false ? null : (
          <div className="hide">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSaturday}
                  checked={quotesSaturday}
                />
               Quotes for Saturday
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSunday}
                  checked={quotesSunday}
                />
                Quotes for Sunday
              </label>
            </div>
          </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {quotesListFiltered.map(
              ({ id, firstName, lastName, quote, favorite }) => {
                return (
                  <PlacesDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    quote={quote}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;