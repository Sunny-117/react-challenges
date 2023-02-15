import { useParams } from "umi";
import React from "react";

export default function Id() {
  const params = useParams();
  console.log(params);
  return <div>{params.id}</div>;
}
