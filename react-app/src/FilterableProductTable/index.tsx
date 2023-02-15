import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import "./index.css";
import axios from "axios";
import ProductTable from "./ProductTable";
export default function FilterableProductTable() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://127.0.0.1:5173/data.json");
      setDataList(data);
    })();
  }, []);
  return (
    <div className="wrapper">
      <div className="product-table">
        <SearchBar />
      </div>
      <ProductTable />
    </div>
  );
}
