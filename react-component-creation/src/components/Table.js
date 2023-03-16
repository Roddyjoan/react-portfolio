import { Fragment } from 'react';

function Table({ data, config, keyFn }) {


    const renderedHeaders = config.map((column) => {
        if (column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment> ;
        }

        return <th key={column.label}> {column.label} </th>
    });


    const renderedRows = data.map((item) => {

        const renderedcells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(item)}</td>
        });

        return <tr className="border-b" key={keyFn(item)}>
            {renderedcells}
        </tr>
    })
    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>{renderedRows}</tbody>

    </table>
}

export default Table;