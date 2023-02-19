import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () =>{
return (`
<div class="card">
<div class="card-header">Who to Follow</div>
<ul class="list-group list-group-flush">
${
who.map(who1 =>{
 return(WhoToFollowListItem(who1));
}).join('')
}
</ul>
</div>


`);
}
export default WhoToFollowList;