function TagBubbles({tags}){
    
    const renderTags = () => {
        return tags.map((tag, index) =>{
            return(
                <div key={index}>{tag}</div>
            )
        });

    }

    return (
        <div>{renderTags()}</div>
    )
}

export default TagBubbles;