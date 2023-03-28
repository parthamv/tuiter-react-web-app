import React, {useState} from "react";
import "./post.css";
import {useSelector, useDispatch} from 'react-redux';
import {deleteTuitThunk,updateTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({
                  post={
                  "_id": "113",
                      "userName": "Elon Musk",
                      "handle":"@elonmusk",
                      "image": "../images/elonavatar.jpg",
                      "time": "2h",
                      "title": "Amazing show about Inspiration4x mission!",
                      "tuit": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
                      "replies": "22",
                      "retuits": "25",
                      "likes": "28",
                      "liked": true,
                  }
                  }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
return (
<div className="card">
<div className="card-body">
<div>
<img className="wd-ClassImage" src={`../images/${post.image}`} />
<p className="wd-userName"> {post.userName}
 <i className="bi bi-check-circle wd-circle"></i>
<span className="wd-userHandle"> {post.handle} - {post.time} </span>
</p>
<i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}></i>
</div>


<div className="wd-thirdContent wd-blogContent">
<p  className="p-2 pt-2 wd-blogPara">
{post.tuit}
</p>
</div>

<div className="d-flex mt-1 wd-likeBox">
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-chat wd-newIcons" > <span
                className="wd-likeContent">{post.replies}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-share wd-newIcons"> <span
           className="wd-likeContent"   >{post.retuits}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons" ><i onClick ={()=> dispatch(updateTuitThunk({...post, likes:post.likes+1}))} className="bi bi-heart-fill wd-newIconsRed"><span
            className="wd-likeContent"   >{post.likes}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons" ><i onClick ={()=> dispatch(updateTuitThunk({...post, dislikes:post.dislikes+1}))} className="bi bi-hand-thumbs-down"><span
                    className="wd-likeContent"   >{post.dislikes}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-send wd-newIcons"></i></a></li>
    </div>


</div>
</div>
)
};

export default TuitItem;