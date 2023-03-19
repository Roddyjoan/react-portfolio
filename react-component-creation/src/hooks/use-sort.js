import { useState } from "react";
function useSort(data, config){

    //find non JSX functions that refer to 1-2 pieces of state 
    const [sortOrder, setSortOder] = useState(null);
    const [sortBy, setSortBy] = useState(null);


    const setSortColumn = (label) => {
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
    };

    //only sort data if sortOrder && sortBy are true
    //make a copy of the 'data' prop
    //find the correct sortValue function and apply it 
    
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
    };


    return {
        sortOrder,
        sortBy,
        setSortColumn,
        sortedData
    }
}


export default useSort;