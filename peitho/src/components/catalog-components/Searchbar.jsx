import React, { useRef, useState } from "react";
import "../../styles/catalog.css";
import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';

export default function Searchbar({ clothes }) {
  const [searchInput, setSearchInput] = useState("");
  // const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  //   if (document.activeElement === refFlag.current) {
  //     document.getElementById("dropdown")?.setAttribute("style", "display: flex");
  //   }
  //   if (document.activeElement !== refFlag.current) {
  //     document.getElementById("dropdown")?.setAttribute("style", "display: none");
  //   }

  // let myInput = document.getElementById("searchInput");
  // myInput?.addEventListener("focus", myOnFocus, true);
  // myInput?.addEventListener("blur", myOnBlur, true);

  // let myDropDown = document.getElementById("dropdown");
  // myDropDown?.addEventListener("focus", myOnFocus, true);
  // myDropDown?.addEventListener("blur", myOnBlur, true);

  // function myOnFocus() {
  //   setFlag(true);
  // }

  // function myOnBlur() {
  //   setFlag(false);
  // }

  return (
    <div id="searchInput" className="searchbar">
      <div>

      <input
        type="text"
        placeholder="Buscar prenda..."
        onChange={(e) => handleChange(e)}
        value={searchInput}
        />
        {/* <div> */}

        <ClearIcon id={searchInput !== "" ? "ClearBtn" : "hidden"} onClick={() => setSearchInput("")} />
        {/* </div> */}
      </div>
      <div id="dropdown" className="dropdown">
        {searchInput !== ""
          ? clothes
              .filter((eachArrItem) =>
                eachArrItem.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
              .map((item) => {
                return (
                  <Link to={`/catalogo/${item.id}`} key={item.id}>
                    {/* <div className="search-dropdown">
                      <ul>
                        <li>
                          <img
                            src={item.image[0]}
                            alt="searched item thumbnail"
                          />
                        </li>
                        <li>
                          <h5>{item.name}</h5>
                        </li>
                      </ul>
                    </div> */}
                    <div className="search-dropdown">
                      <img src={item.image[0]} alt="searched item thumbnail" />
                      <p>{item.name}</p>
                    </div>
                  </Link>
                );
              })
          : null}
      </div>
    </div>
  );
}
