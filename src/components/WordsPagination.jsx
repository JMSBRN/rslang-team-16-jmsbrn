import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import '../components/wordsPagination.css';
import { Context } from "../Context";

function WordsPagination() {
 const {pagePagination, handleChange } = useContext(Context);
  return (
    <Stack spacing={2}>
      <Typography>Page: {pagePagination}</Typography>
      <Pagination 
        count={30}
        page={pagePagination}
        shape="rounded"
        showFirstButton showLastButton
        onChange={handleChange}
       />
    </Stack>
  );
}
export default WordsPagination;
