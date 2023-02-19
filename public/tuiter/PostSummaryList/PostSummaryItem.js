const PostSummaryItem = (post) =>{
return(`

            <div class="card">
            <div class="card-body">
                <span class="wd-Time">
                    ${post.topic}
                </span>
                <p class="card-title wd-centreFont">${post.userName} <i class="fa fa-check-circle"></i>
                    <span class="wd-Time"> - ${post.time}</span>
                </p>
                <p class="card-text wd-centreFont">${post.title}
                </p>
                <span class="wd-Time">
                ${post.tweets}
            </div>
            <div class="wd-ImageWrapper">
                <img src=${post.image} class="card-img-top align-self-center">
            </div>
            </div>

        `);
}
export default PostSummaryItem;
