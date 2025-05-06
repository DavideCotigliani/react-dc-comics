import ComicCard from "./ComicCard"

const ListComics = () => {
    return (
        <section id="products">
            <h2>I miei fumetti</h2>
            <div className="container card-container">
                <ComicCard />
                <ComicCard />
                <ComicCard />
                <ComicCard />
                <ComicCard />
                <ComicCard />
                <ComicCard />
                <ComicCard />
                <ComicCard />
                <ComicCard />
                <ComicCard />
                <ComicCard />
            </div>
        </section>
    )
}

export default ListComics
