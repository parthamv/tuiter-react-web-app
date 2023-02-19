import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () =>{
return(`
<div class="row">
      <div class="row mb-3">
                <div class="input-group">
                            <span class="input-group-text wd-icon">
                                <i class="fa fa-search"></i>
                            </span>
                    <input type="text" class="form-control wd-searchBar" placeholder="Search Tuiter">
                    <span style="margin-left: 8px;">
                                <i class="fa fa-cog mt-1" style="font-size: 1.5em; color:#1DA1F2"></i>
                            </span>
                </div>
        </div>
</div>

<!--    navigation tabs as a row-->

        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="../for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="../entertainment.html">Entertainment</a>
            </li>
        </ul>


        <div class="imageContainer" style="margin-right:-12px;height:460px;">
            <img src="spacex.jpg" style="width:100%;height:450px;margin-left:-12px;margin-top:10px;object-fit:cover;">
            <div class="wd-photoContent fa-3x">SpaceX Starship</div>
        </div>
        ${PostSummaryList()}

`);
}

export default ExploreComponent;