import Rating from "./rating";
import TagBubbles from "./TagBubbles";

function BookInfo({title, authors, categories, description, publishedDate, industryIdentifiers, avgRating}){
    
    // Extract genres from categories
    const genres = new Set();
    categories?.forEach((category) => {
        category.split(" / ").forEach((genre) => {
            genres.add(genre);
        });
    });
    
    return (
        <div>
            <h1>{title}</h1>
            <h2>{authors?.[0]}</h2>
            <div className="book-page-avarage-rating">
                <Rating rating={avgRating}/> 
                <p>Average rating: <span>{avgRating}</span></p>
            </div>
            <div dangerouslySetInnerHTML={{__html: description}} />
            <div>
                <span>Genres:</span> <TagBubbles tags={[...genres]} />
            </div>
            <p>published: {publishedDate}</p>
            <p>ISBN: {industryIdentifiers?.[0].identifier || "Not available"}</p>            
        </div>
    )
}

export default BookInfo;