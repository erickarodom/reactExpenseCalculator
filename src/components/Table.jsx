export function Table(){
    return (
        <>
        <table>
            <thead id="tableHeader">
                <tr>
                    <th>type</th>
                    <th>item</th>
                    <th>date</th>
                    <th>amount</th>
                </tr>
            </thead>
            <tbody id="tableBody"></tbody>
            <tfoot>
                <tr>
                    <td>
                    Your added items will show up here!
                    </td>
                </tr>
            </tfoot>
      </table>
      </>
    )
}