import { useEffect, useState } from "react";
import Books from "../../components/Books/Books";
import Hero from "../../components/Hero/Hero";
// import { useNavigation } from "react-router-dom";
// import Loader from "../../components/Loader/Loader";

const Home = () => {
    // const navigation = useNavigation();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    // if (navigation.state === 'loading') return <Loader />;
    return (
        <div className="mt-8 mb-24">
            {books.length > 0 && (
                <>
                    <Hero firstBook={books[0]} />
                    <div id="books">
                        <Books books={books} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;