import React, {useState} from 'react';
import {useProducts} from '../hook/products';
import ErrorMessage from '../ui/components/ErrorMessage';
import Loader from '../ui/components/Loader';
import Table from "../ui/table/Table";
import s from "../style/Table.module.css";
import Search from "../ui/search/Search";
import OEM_DATA from "../OEM_DATA.json";
import ReactPaginate from "react-paginate";

// const data = OEM_DATA;


const TabPage = ({oemList}) => {
    const [itemCarList, setItemCarList] = useState(oemList.slice(0, 50))
    const {loading, error, products} = useProducts()
    const [pageNumber, setPageNumber] = useState(0)

    const carsPerPage = 14
    const pagesVisited = pageNumber * carsPerPage
    const displayItemCarList = itemCarList
        .slice(pagesVisited, pagesVisited + carsPerPage)
        .map(i => {
            return <Table
                key={i.index}
                car_model={i.car_model}
                car_model_title={i.car_model_title}
                car_OEM={i.car_OEM}
                date={i.date}
                shop_price={i.shop_price}
                warehouse={i.warehouse}
                link={i.link}
            />
        })
    const pageCountItem = Math.ceil(itemCarList.length/carsPerPage)
    const changePage = ({selected}) =>{
        setPageNumber(selected)
    }
    return (
        <div>
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}

            <div className={s.tab_container}>
                <table className={s.table}>
                    <thead>
                    <Search/>
                    <tr>
                        <th>Model</th>
                        <th>Titile</th>
                        <th>OEM</th>
                        <th>Date</th>
                        <th>Ebay $</th>
                        <th>Склад $</th>
                        <th>Link</th>

                    </tr>
                    </thead>
                    <tbody>
                    {displayItemCarList}
                    <ReactPaginate
                        onPageChange={changePage}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCountItem}
                        containerClassName={s.paginationBttns}
                        previousLinkClassName={s.previousBttn}
                        nextLinkClassName={s.nextBttn}
                        disabledClassName={s.paginationDisabled}
                        activeClassName={s.paginationActive}
                    />
                    {/*{oemList.map((car, index) => {*/}
                    {/*    return <Table key={index}*/}
                    {/*                  car_model={car.car_model}*/}
                    {/*                  car_model_title={car.car_model_title}*/}
                    {/*                  car_OEM={car.car_OEM}*/}
                    {/*                  date={car.date}*/}
                    {/*                  shop_price={car.shop_price}*/}
                    {/*                  warehouse={car.warehouse}*/}
                    {/*                  link={car.link}*/}
                    {/*    />*/}
                    {/*})}*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TabPage;
