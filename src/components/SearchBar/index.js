import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
//Image

import searchIcon from "../../images/search-icon.svg";
import { Content, Wrapper } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="Search Icon" />
        <input
          type="text"
          placeholder="Search Movies"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callBack: PropTypes.func,
};
export default SearchBar;
