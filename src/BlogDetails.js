import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, loading, error } = useFetch("http://localhost:8000/blogs/" + id)

    const history = useHistory();

    const handleClick = () => {


        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
            Headers: { 'Content-Type': 'application/json' }
        })
            .then(() => {
                console.log("blog deleted");
            })
            .then(() => {
                history.push('/home');
            })

    }
    return (

        <div className="BlogDetails">
            {loading && <div>Is Loading...</div>}
            {error && <di>{error}</di>}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p className="p1">{blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            }
        </div>
    );
}

export default BlogDetails;










