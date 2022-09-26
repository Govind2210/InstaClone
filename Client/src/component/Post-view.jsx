import { useEffect,useState }from "react";
import axios from "axios";
import Card from "./Card";
import Header from './Header';
const PostView=()=>{
    const [post,setPost]=useState([]);
   
    useEffect(()=>{
        axios.get("https://gogoinstaclone.herokuapp.com/post-page").then((respond)=>{
            console.log(respond.data.user)
            setPost(respond.data.user);
        })
    },[]);

return(
    <>
    <Header/>
    <Card file={post} />
    </>
); 
}
export default PostView;