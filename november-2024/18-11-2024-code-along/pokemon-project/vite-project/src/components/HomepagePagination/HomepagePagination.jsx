import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const styles = {
  marginTop: "1em",
  marginBottom: "2em",
};

export default function PaginationRounded() {
  return (
    <Stack sx={styles} spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
