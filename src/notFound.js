import { Link } from "react-router-dom";

const notFound = () => {
    return (
        <div className="notFound">
            <h1>Sorry</h1>
            <p>That page page is not found</p>
            <Link to="/home" >Back to Home page</Link>
        </div>
    );
}

export default notFound;