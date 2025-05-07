const ComicCard = ({ comic }) => {
    return (
        <div className="prod-card">
            <img src={comic.thumb} />
            <h3>{comic.title}</h3>
        </div>
    )
}

export default ComicCard
