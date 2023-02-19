const WhoToFollowListItem = (who) => {
 return(`
 <li class ="list-group-item">
 <div class="row">
       <div class="col-2">
       <img src=${who.avatarIcon} class="card-img-top" style="border-radius:50px;width:40px;height:40px;object-fit:cover"/>
        </div>
         <div class="col-6">
          <div class="wd-contentFont">${who.userName} <i class="fa fa-check-circle"></i></div>
            <span class="wd-userTag">@${who.handle}</span>
                </div>
            <div class="col-4">
              <button class="btn btn-primary btn-block rounded-pill" >Follow</button>
           </div>
           </div>
           </li>
 `);
}
export default WhoToFollowListItem;