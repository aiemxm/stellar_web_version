import { Skeleton } from "@mui/material";
import React from "react";

export default function CustomSkeleton(props) {
  return (
    <div className="detail-container">
      {/*//todo: put all skeleton in divs to position correctly*/}
      {/*//todo: create custom component*/}
      <div className="detail-main">
        <Skeleton
          className="detail-title"
          sx={{ bgcolor: "rgba(23,96,135,0.27)", marginTop: 100 }}
        />

        <Skeleton
          className="detail-img"
          width={1000}
          height={900}
          sx={{ bgcolor: "rgba(23,96,135,0.27)" }}
        />
        <Skeleton
          className="detail-copyright"
          width={300}
          sx={{ marginTop: "150px", bgcolor: "rgba(23,96,135,0.27)" }}
        />
      </div>
      {/* <Skeleton
        className="detail-explanation-mobile"
        height={300}
        sx={{ bgcolor: "rgba(23,96,135,0.27)" }}
      /> */}
    </div>
  );
}
