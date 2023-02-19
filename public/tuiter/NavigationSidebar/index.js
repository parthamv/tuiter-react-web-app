

const NavigationSidebar = (active) => {
 return(`
   <div class="list-group">
     <a class="list-group-item" href="/" >
       <i class="fab fa-twitter"></i></a>
     <a href="../HomeScreen/index.html" id="home" class="list-group-item list-group-item-action">
             <i class="fa fa-home d-inline-block"; style="margin:auto;"></i>
             <span class="d-none d-xl-inline-block">Home</span>
         </a>
         <a href="../explore/index.html" class="list-group-item list-group-item-action" id="explore">
             <i class="fa fa-hashtag"></i>
             <span class="d-none d-xl-inline-block">Explore</span>
         </a>
         <a href="../home.html" class="list-group-item list-group-item-action">
             <i class="fa fa-bell"></i>
             <span class="d-none d-xl-inline-block">Notifications</span>
         </a>
         <a href="../home.html" class="list-group-item list-group-item-action">
             <i class="fa fa-envelope d-inline-block" style="margin:auto"></i>
             <span class="d-none d-xl-inline-block">Messages</span>
         </a>
         <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
             <i class="fa fa-bookmark d-inline-block" style="margin:auto"></i>
             <span class="d-none d-xl-inline-block">Bookmarks</span>
         </a>
         <a href="../home.html" class="list-group-item list-group-item-action">
             <i class="fa fa-list d-inline-block" style="margin:auto"></i>
             <span class="d-none d-xl-inline-block">Lists</span>
         </a>
         <a href="../profile.html" class="list-group-item list-group-item-action">
             <i class="fa fa-user d-inline-block" style="margin:auto"></i>
             <span class="d-none d-xl-inline-block">Profile</span>
         </a>
         <a href="../navigation.html" class="list-group-item">
             <i class="fa fa-ellipsis-h d-inline-block" style="margin:auto"></i>
             <span class="d-none d-xl-inline-block">More</span>
         </a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block  rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;