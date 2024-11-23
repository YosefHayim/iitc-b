import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({
  onPageChange,
  maxPage,
  currentPage,
}) {
  const handlePageChange = (event, page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <Stack
      sx={{
        marginTop: "4em",
        color: "white",
        background: "transparent",
      }}
      spacing={2}
    >
      <Pagination
        count={maxPage}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{
          display: "flex",
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            color: "white", // Default text color
            "&:hover": {
              color: "gray", // Hover text color
              backgroundColor: "rgba(128, 128, 128, 0.2)", // Gray box background on hover
            },
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            color: "white", // Selected text color
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Optional: Selected button background
            "&:hover": {
              backgroundColor: "rgba(128, 128, 128, 0.4)", // Darker gray on hover for selected
            },
          },
        }}
      />
    </Stack>
  );
}
