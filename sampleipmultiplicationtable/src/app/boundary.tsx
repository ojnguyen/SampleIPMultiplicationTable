function TableComponent({model, updateDisplay}) {
    const elements = model.values;

    function RowComponent({row}) {
        return (
            <tr>
                <th><button onClick={(e) => remove(row)}>{elements[row]}</button></th>
                {elements.map((value, col) => (<td key={row + "," + col}>{value * elements[row]}</td>))}
            </tr>
        )
    }

    function extend() {
        model.extend();
        updateDisplay();
    }

    function remove(idx) {
        model.remove(idx);
        updateDisplay();
    }

    return (
        <table>
            <thead>
                <tr>
                    <th><button onClick={(e) => extend()}>+</button></th>
                    {model.values.map((value, col) => (<th key={col}><button onClick={(e) => remove(col)}>{value}</button></th>))}
                </tr>
            </thead>
            <tbody>
                {elements.map((value, row) => (<RowComponent key={row} row={row}/>))}
            </tbody>
        </table>
    )
}

export { TableComponent };