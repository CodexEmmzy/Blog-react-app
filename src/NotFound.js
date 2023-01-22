import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h2 >Page Not Found</h2>
            <p>That page you entered cannot be found. Click on the link below to go back to the home page</p>
            <Link className='not-found-h2' to='/'>Homepage</Link>
        </div>
      );
}
 
export default NotFound;