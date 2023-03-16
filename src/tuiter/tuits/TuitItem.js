import React, {useState} from "react";
import "./post.css";
import {useSelector, useDispatch} from 'react-redux';
import { increaseLike, decreaseLike,deleteTuit} from './tuits-reducer';

const TuitItem = ({
                  post={
                  "_id": "113",
                      "userName": "Elon Musk",
                      "handle":"@elonmusk",
                      "image": "/images/elonavatar.jpg",
                      "time": "2h",
                      "title": "Amazing show about Inspiration4x mission!",
                      "tuit": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
                      "replies": "22",
                      "retuits": "25",
                      "likes": "28",
                      "liked": true,
                  }
                  }) => {
 const [liked, setLiked] = useState(post.liked);
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  const handleLikeClick = () => {
    if (liked) {
      dispatch(decreaseLike(post._id));
      setLiked(false);
    } else {
      dispatch(increaseLike(post._id));
      setLiked(true);
    }
  };


return (
<div className="card">
<div className="card-body">
<div>
<img className="wd-ClassImage" src={`/images/${post.image}`} />
<p className="wd-userName"> {post.userName}
 <i className="bi bi-check-circle wd-circle"></i>
<span className="wd-userHandle"> {post.handle} - {post.time} </span>
</p>
<i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}></i>
</div>


<div className="wd-thirdContent wd-blogContent">
<p  className="p-2 pt-0 wd-blogPara">
{post.tuit}
</p>
</div>

<div className="d-flex mt-1 wd-likeBox">
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-chat wd-newIcons" > <span
                className="wd-likeContent">{post.replies}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-share wd-newIcons"> <span
           className="wd-likeContent"   >{post.retuits}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons" onClick={handleLikeClick}><i className={liked ?"bi bi-heart-fill wd-newIconsRed":"bi bi-heart wd-newIcons"}><span
            className="wd-likeContent"   >{post.likes}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-send wd-newIcons"></i></a></li>
    </div>


</div>
</div>
)
};

export default TuitItem;