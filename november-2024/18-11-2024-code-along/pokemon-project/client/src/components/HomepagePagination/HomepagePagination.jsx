import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "react-router-dom";

export default function PaginationRounded({
  setCurrentPage,
  maxPage,
  currentPage,
}) {
  const [searchParams, setSearchParams] = useSearchParams(1);

  const handlePageChange = (event, page) => {
    if (page) {
      searchParams.set("page", page);
      setSearchParams(searchParams);
      setCurrentPage(page);
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
