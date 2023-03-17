import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const secondPag = ({info, pageNumber, setpageNumber})=>{
    return(
        <ReactPaginate
        nextLabel="siguiente" previousLabel="anterior"
        className="pagination justify-content-center gap-4 my-4"
        pageCount={info.pages}
        nextClassName="btn "
        previousClassName="btn"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        onPageChange={(data)=>setpageNumber(data.selected+1)}/>
    )
}

export default secondPag;

