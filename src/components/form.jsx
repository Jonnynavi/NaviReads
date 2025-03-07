import Rating from "./rating"
function form(){
    return(
        <form>
            <Rating />
            <input type="text" placeholder="Review"/>
            <button>Enter</button>
        </form>
    )
}

export default form;