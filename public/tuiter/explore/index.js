import NavigationSidebar from '../NavigationSidebar/index.js';
import ExploreComponent from './ExploreComponent.js';
import WhoToFollowList from '../WhoToFollowList/index.js';
function exploreComponent() {
   $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 col-xxl-7">
    ${ExploreComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
    ${WhoToFollowList()}
   </div>
  </div>
   `);

    const removeActive=$("#home");
      removeActive.removeClass('active');

      const addActive=$("#explore");
         addActive.addClass('active');
}
$(exploreComponent);