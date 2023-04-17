import React from "react";
import UserPost from "./API/endpoints/UserPost";
import TokenPost from "./API/endpoints/TokenPost";
import PhotoPost from "./API/endpoints/PhotoPost";
import { PhotoGet } from "./API/endpoints/PhotoGet";

export default function Api() {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>TOKEN POST</h2>
      <TokenPost />
      <h2>PHOTO POST</h2>
      <PhotoPost />
      <h2>PHOTO GET</h2>
      <PhotoGet />
    </div>
  );
}
