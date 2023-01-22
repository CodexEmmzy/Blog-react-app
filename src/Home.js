import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isLoading, error} = useFetch('http://localhost:1000/blogs')   

    return ( 
       <div className="home">
         { error && <div>{ error }</div>}
         {isLoading && <div> Loading Pls Wait....... </div>}
         {blogs && <BlogList blogs={blogs} title='All Blogs'> </BlogList>}
       </div>
     );
}
 
export default Home;