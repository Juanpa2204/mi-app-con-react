import React from 'react';
import { Pagination } from 'react-bootstrap';

const Page = ({ infoPage, GetList }) => {
    const itemPagination = [];
    for (let i = 1; i < infoPage.pages; i++) {
        itemPagination.push(
            <Pagination.Item
                key={i}
                onClick={(e) => {
                    GetList(parseInt(e.target.text), null);
                }}
            >
                {i}
            </Pagination.Item>
        );
    }

    return (
        <Pagination>
            <Pagination.Prev
                onClick={() => {
                    if (infoPage.prev === null) {
                        GetList(0, null);
                    } else {
                        GetList(null, infoPage.prev);
                    }
                }}
            />
            {itemPagination.map((item) => {
                return item;
            })}
            <Pagination.Next
                onClick={() => {
                    if (infoPage.next === null) {
                        GetList(0, null);
                    } else {
                        GetList(null, infoPage.next);
                    }
                }}
            />
        </Pagination>
    );
};

export default Page;