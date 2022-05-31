import moment from 'moment'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import style from './TableListCar.module.css'
import { Dropdown, DropdownButton, Pagination } from 'react-bootstrap'

const TableListCar = ({ value }) => {

    moment.updateLocale('id', require('moment/locale/id'))

    const headerStyle = {
        backgroundColor: '#CFD4ED',
        fontSize: '14px',
        fontWeight: '600',
    }

    const rowStyle = {
        backgroundColor: '#FFFFFF',
        fontSize: '14px',
        fontWeight: '400',
    }

    const headerFormatter = (data) => {
        return (
            <div className="d-flex justify-content-between">
                <div>{data.text}</div>
                <div><FontAwesomeIcon icon={faSort} size="xs" /></div>
            </div>
        )
    }

    const noFormatter = (data, row, index) => {
        return (<div className={'text-center'}>{index + 1}</div>)
    }

    const priceFormatter = (data, row, index) => {
        if (data) {
            let separator
            let number_string = data.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            return (
                <div className={'d-flex justify-content-between'}>
                    <span>Rp </span><span>{rupiah}</span>
                </div>
            )
        } else {
            return "Rp 0"
        }
    }

    const dateFormatter = (data, row, index) => {
        if (data) {
            return moment(data.substring(0, 10) + " " + data.substring(11, 19)).format('hh:mm / Do MMMM YYYY')
        } else {
            return " - "
        }
    }

    const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
        <div>
            <div className={'mb-2'}>Limit</div>
            <DropdownButton id="dropdown-basic-button" title={currSizePerPage} variant="outline-primary">
                {
                    options.map((option) => {
                        return (
                            <div key={option.text}>
                                <Dropdown.Item type="button" onClick={() => onSizePerPageChange(option.page)}>{option.text}</Dropdown.Item>
                            </div>
                        );
                    })
                }
            </DropdownButton>
        </div>
    );

    const pageListRenderer = ({ pages, onPageChange }) => {
        return (
            <div className={'col-md-6 col-xs-6 col-sm-6 col-lg-6 d-flex align-items-end'}>
                <div className={'ms-auto'}>
                    <Pagination>
                        {
                            pages.map((page, index) => (
                                <Pagination.Item key={index} onClick={() => onPageChange(page.page)} active={page.active}>{page.page}</Pagination.Item>
                            ))
                        }
                    </Pagination>
                </div>
            </div>
        );
    };

    const options = {
        sizePerPageRenderer,
        pageListRenderer,
        paginationSize: 4,
        pageStartIndex: 1,
        alwaysShowAllBtns: true,
        withFirstAndLast: true,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        disablePageTitle: true,
    };

    const columns = [
        {
            dataField: "",
            text: "No",
            sort: true,
            headerStyle: headerStyle,
            headerFormatter: headerFormatter,
            formatter: noFormatter,
        },
        {
            dataField: "name",
            text: "Name",
            sort: true,
            headerStyle: headerStyle,
            headerFormatter: headerFormatter,
        },
        {
            dataField: "category",
            text: "Category",
            sort: true,
            headerStyle: headerStyle,
            headerFormatter: headerFormatter,
        },
        {
            dataField: "price",
            text: "Price",
            sort: true,
            headerStyle: headerStyle,
            headerFormatter: headerFormatter,
            formatter: priceFormatter,
        },
        {
            dataField: "start_rent_at",
            text: "Start Rent",
            sort: true,
            headerStyle: headerStyle,
            headerFormatter: headerFormatter,
            formatter: dateFormatter,
        },
        {
            dataField: "finish_rent_at",
            text: "Finish Rent",
            sort: true,
            headerStyle: headerStyle,
            headerFormatter: headerFormatter,
            formatter: dateFormatter,
        },
        {
            dataField: "createdAt",
            text: "Created at",
            sort: true,
            headerStyle: headerStyle,
            headerFormatter: headerFormatter,
            formatter: dateFormatter,
        },
        {
            dataField: "updatedAt",
            text: "Updated at",
            sort: true,
            headerStyle: headerStyle,
            headerFormatter: headerFormatter,
            formatter: dateFormatter,
        },
    ]

    return (
        <BootstrapTable keyField="id" data={value} columns={columns} rowStyle={rowStyle} bordered={false} pagination={paginationFactory(options)} condensed hover />
    )
}

export default TableListCar