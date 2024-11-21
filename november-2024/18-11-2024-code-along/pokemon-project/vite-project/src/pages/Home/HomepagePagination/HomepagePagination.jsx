import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const styles = {
  marginTop: "1em",
  marginBottom: "2em",
};

export default function PaginationRounded({ onPageChange, maxPage }) {
  const handlePageChange = (event, page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <Stack sx={styles} spacing={2}>
      <Pagination
        count={maxPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ display: "flex", justifyContent: "center" }}
      />
    </Stack>
  );
}
