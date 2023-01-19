import React from "react";
import UserPost from "./API/endpoints/UserPost";
import TokenPost from "./API/endpoints/TokenPost"

export default function Api() {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>TOKEN POST</h2>
      <TokenPost /> 
    </div>
  );
}
