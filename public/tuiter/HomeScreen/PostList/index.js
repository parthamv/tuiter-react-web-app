import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostItemList = () =>{
return (`
<div>
        ${
         posts.map(post =>{
         return(PostItem(post));
        }).join('')
        }
        </div>
`);
}
export default PostItemList;
