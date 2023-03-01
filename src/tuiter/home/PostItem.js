
import React from "react"
import "./post.css"

const PostItem = ({
                  post={
                  "_id": "113",
                      "userName": "Elon Musk",
                      "userHandle":"elonmusk",
                      "avatarImage": "/images/elonavatar.jpg",
                      "time": "2h",
                      "title": "Amazing show about Inspiration4x mission!",
                      "blogimage": "../explore/elonmuskcontent.jpg",
                      "blogTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                      "blogContent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
                      "comment": "22",
                      "retweet": "25",
                      "likes": "28"
                  }
                  }) => {
return (
<div className="card">
<div className="card-body">
<div>
<img className="wd-ClassImage" src={`/images/${post.avatarImage}`} />
<p className="wd-userName"> {post.userName}
 <i className="bi bi-check-circle wd-circle"></i>
<span className="wd-userHandle"> @{post.userHandle} - {post.time} </span>
</p>
<span ><i className="bi bi-three-dots wd-userVerification"></i></span>
<p className="wd-postTitle">{post.title}</p>
</div>

<div className="wd-blogInfo">
<img src={`/images/${post.blogimage}`} className="wd-secondImage wd-blogImage"/>
</div>
<div className="wd-thirdContent wd-blogContent">
<p className="p-2 wd-blogTitle">{post.blogTitle}</p>
<p  className="p-2 pt-0 wd-blogPara">
{post.blogContent}
</p>
</div>

<div className="d-flex mt-1 wd-likeBox">
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-chat wd-newIcons" > <span
                className="wd-likeContent">{post.comment}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-share wd-newIcons"> <span
           className="wd-likeContent"   >{post.retweet}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-chat-square-heart wd-newIcons"><span
            className="wd-likeContent"   >{post.likes}</span></i></a></li>
        <li><a href="#" className="wd-paraIcons"><i className="bi bi-send wd-newIcons"></i></a></li>
    </div>


</div>
</div>
)
};

export default PostItem;