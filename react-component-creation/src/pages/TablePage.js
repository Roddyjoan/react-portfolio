import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

function TablePage() {

    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Banana', color: 'bg-yellow-500', score: 3 },
        { name: 'Apple', color: 'bg-red-500', score: 2 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },
    ];


    const config = [

        // add label for label, render for how to render the table, and sortValue to find which to sort by
        {   
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {   

            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
            
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        }
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }

    
    return <SortableTable keyFn={keyFn} config={config} data={data} />;
}


export default TablePage;