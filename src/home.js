import BlogList from "./blgoList";
import useFetch from "./useFetch";



const Home = () => {

    const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <p className="">{error}</p>}
            {blogs && <BlogList blogs={blogs} title="all blogs" />}
            {loading && <p className="">Is Loading...</p>}

        </div>
    );
}
export default Home;