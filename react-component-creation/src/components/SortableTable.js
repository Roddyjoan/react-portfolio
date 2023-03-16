import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go'

function SortableTable(props) {
    const [sortOrder, setSortOder] = useState(null);
    const [sortBy, setSortBy] = useState(null);


    const { config, data } = props;

    const handleClick = (label) => {
        if (sortBy && label !== sortBy ){
            setSortOder('asc');
            setSortBy(label);
            return;
        }
        if (sortOrder === null) {
            setSortOder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOder(null);
            setSortBy(null);
        }
    }
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () =>
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
        }
    });


    let sortedData = data;

    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        })
    }
    return <Table {...props} config={updatedConfig} data={sortedData} />

}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    } else if (sortOrder === 'asc') {
        return <GoArrowSmallUp />
            ;
    } else if (sortOrder === 'desc') {
        return <GoArrowSmallDown />;
    }
}
export default SortableTable;