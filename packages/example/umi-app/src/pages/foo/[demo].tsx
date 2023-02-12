import React from "react";
import { useParams } from "umi";

export default function slug() {
  const res = useParams();
  return <div>{res.demo}</div>;
}
