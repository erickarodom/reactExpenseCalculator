import {Table} from './Table.jsx'

export function Form(){
    function test(){
        alert('I am working');
    }
    return (
    <>
        <div className="form-ctnr">
            <form>
                <div className="exp-ctnr">
                    <label htmlFor="currency">Type:</label>
                    <select type="text" id="currency" name="expense-form">
                        <option>Cash</option>
                        <option>Card</option>
                        <option>Crypto</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="itemPurchased" >Item:</label>
                    <input type="text" id="itemPurchased"/>
                </div>
                <div>
                    <label htmlFor="purchaseDate" >Date:</label>
                    <input type="date" id="purchaseDate"/>
                </div>
                <div>
                    <label htmlFor="amount" >Amount:</label>
                    <input type="number" id="amount" min={0} placeholder="How Much?"/>
                </div>
                <div className= "button-ctnr" >
                    <input type="submit" id="addExpenseButton" className="submit-btn" value={`Add Expense`} onClick={test}/>
                </div>
            </form>
        </div>
        <Table/>
    </>
    )
}