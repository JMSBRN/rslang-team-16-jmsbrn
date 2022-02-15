import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import '../components/wordsPagination.css';
import { Context } from "../Context";

function WordsPagination() {
 const {pagePagination, handleChangePagePagination } = useContext(Context);
  return (
    <Stack spacing={2}>
      <Typography>Page: {pagePagination + 1}</Typography>
      <Pagination 
        count={30}
        page={pagePagination}
        shape="rounded"
        showFirstButton showLastButton
        onChange={handleChangePagePagination}
       />
    </Stack>
  );
}
export default WordsPagination;
