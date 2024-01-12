export function Form(){
    return (
    <>
        <form>
            <div>
                <label >Type:</label>
                <select type="text" id="currency" name="expense-form">
                    <option>Cash</option>
                    <option>Card</option>
                    <option>Crypto</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label >Item:</label>
                <input type="text"></input>
            </div>
            <div>
                <label >Date:</label>
                <input type="date"></input>
            </div>
            <div>
                <label >Amount:</label>
                <input type="number"></input>
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </form>
    </>
    )
}