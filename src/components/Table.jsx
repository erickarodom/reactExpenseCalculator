export function Table(){







    return (
        <div id="tableContainer" className="table-ctnr">
            <table>
                <thead id="tableHeader" className="table-header">
                    <tr>
                        <th>type</th>
                        <th>item</th>
                        <th>date</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody id="tableBody" className="table-body"></tbody>
        </table>
      </div>
    )
}