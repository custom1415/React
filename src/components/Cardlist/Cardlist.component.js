import React, { useEffect, useState } from "react";
import "./Cardlist.styles.scss";
import Card from "../Card/Card.component";
import Search from "../Search/Search.component";
import axios from "axios";
import { connect } from "react-redux";
import SHOP_DATA from "../../shop.data";
function Cardlist({ showSearchBox }) {
  const navLinks = ["home", "shop", "blog", "contact", "", "", "", ""];
  const [Data, setData] = useState(SHOP_DATA);
  const Op = React.useCallback(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      if (data) {
        setData(data);
      } else {
      }
    } catch (error) {}
  }, []);
  React.useEffect(() => {
    Op();
  }, [Op]);

  return (
    <div className="cardlist">
      <Search showSearchBox={showSearchBox} />
      {/* {Data.length
        ? Data.map((link, i) => {
            return <Card key={i} {...link} />;
          })
        : null} */}

      {navLinks.map((item, i) => {
        return <Card key={i} item={item} />;
      })}
    </div>
  );
}

export default connect()(Cardlist);
