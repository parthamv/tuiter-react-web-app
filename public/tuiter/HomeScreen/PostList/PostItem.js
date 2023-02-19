const PostItem = (post) => {
return (`
<div class="card">
<div class="card-body">
<div>
<img src=${post.avatarImage} style="height:48px;width:48px;border-radius:24px;object-fit:cover;margin-top:5px;"/>
<p style="display:inline-block;font-size:15px;margin-left:5px; margin-top:-10px;">${post.userName}
<i class="fa fa-check-circle" aria-hidden="true" style="color:white;"></i>
<span style="color:#555555;font-size:14px;">@${post.userHandle} - ${post.time} </span>
</p>
<span ><i class="fa fa-ellipsis-h" aria-hidden="true" style="color:#555555;float:right;margin-top:5px;"></i></span>
<p style="margin-left:56px;margin-top:-18px;">${post.title}</p>
</div>

<div style="margin-left:52px;margin-bottom:0px;">
<img src=${post.blogimage} class="wd-secondImage"style="width:100%;height:auto;">
</div>
<div class="wd-thirdContent" style="margin-left:52px;font-size:15px;">
<p class="p-2" style="font-weight:600;">${post.blogTitle}</p>
<p  class="p-2 pt-0" style="color:#52595D;font-size:14px;margin-top:-20px; font-weight:500;">
${post.blogContent}
</p>
</div>

<div class="d-flex mt-1" style="list-style:none;margin-left:70px;align-items:center;justify-content:space-between;width:70%">
        <li><a href="#"><i class="fa fa-commenting" aria-hidden="true" style="color:#52595D;font-size:14px"> <span
                style="margin-left:5px;color:#52595D">${post.comment}</span></i></a></li>
        <li><a href="#"><i class="fa fa-retweet" aria-hidden="true" style="color:#52595D;font-size:14px"> <span
           style="margin-left:5px;color:#52595D"    >${post.retweet}</span></i></a></li>
        <li><a href="#"><i class="fa fa-heart" aria-hidden="true" style="color:#52595D;font-size:14px"> <span
            style="margin-left:5px;color:#52595D"    >${post.likes}</span></i></a></li>
        <li><a href="#"><i class="fa fa-paper-plane" aria-hidden="true" style="color:#52595D;font-size:14px"></i></a></li>
    </div>


</div>
</div>
`)
};

export default PostItem;