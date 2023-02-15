import React from "react";

export default function ProductRow({ keyName, value }: any) {
  return (
    <li>
      {keyName}:{value}
    </li>
  );
}
