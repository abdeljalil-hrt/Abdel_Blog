import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState();
    const [author, setAuthor] = useState('Redington');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();

        const blog = { title, body, author }


        setLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log("blog added");
            })
            .then(() => {
                setLoading(false);
                history.push('/home');
            })
    }

    return (
        <div className="create">
            <form onSubmit={handleClick}>
                <label>Blog Title:</label>
                <input type="text" required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author:</label>
                <select required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Raymond Redington">Raymond Redington</option>
                    <option value="Harvey Specter">Harvey Specter</option>
                    <option value="Ryan Holiday">Ryan Holiday</option>
                </select>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>

        </div>

    );
}

export default Create;





