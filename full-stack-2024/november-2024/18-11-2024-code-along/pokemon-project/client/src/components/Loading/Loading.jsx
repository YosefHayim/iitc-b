import * as React from "react";
import styles from "./Loading.module.css";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className={styles.LoadingContainer}>
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress
          size={100}
          sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
        />
      </React.Fragment>
    </div>
  );
};

export default Loading;
