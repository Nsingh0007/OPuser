import React from "react";
import { Upload } from "./upload";
import img from "../../../assets/images/Group 33630.png";

export default function UploadPage() {
  return (
    <div className="outerflex">
      <div className="left-flex">
        <div className="container-flex">
          <Upload />
        </div>
      </div> 
      <img src={img} alt="" className="right-flex"/>
    </div>
  );
}
