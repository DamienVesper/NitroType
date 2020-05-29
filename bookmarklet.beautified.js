javascript:(function(){
  
  var elem='
    <div id="bookmarklet" style="
      position:fixed;
      background:#FFF; 
      border: 1px #000 solid; 
      right:50px; 
      top:50px; 
      z-index:1000; 
      width:250px;
    ">
    <form>
      <label for="url">
        URL:
      </label>
      <select name="url-input" id="url-input">
        <option value="https://www.nitrotype.com/api/settings">
          */settings
        </option>
        <option value="https://www.nitrotype.com/api/stats/summary">
          */stats/summary
        </option>
        <option value="https://www.nitrotype.com/api/auth/facebook">
          */auth/facebook
        </option>
        <option value="https://www.nitrotype.com/api/friends">
          */friends
        </option>
        <option value="https://www.nitrotype.com/api/referrals">
          */referrals
        </option>
        <option value="https://www.nitrotype.com/api/stats/graphs/lastdays">
          */stats/graphs/lastdays
        </option>
        <option value="https://www.nitrotype.com/api/stats/graphs/racelog">
          */stats/graphs/racelog
        </option>
        <option value="https://www.nitrotype.com/api/teams/applications">
          */teams/applications
        </option>
      </select>
      <br><br>
      <button id="add-tag">
        <strong>
          Click to Submit
        </strong>
      </button>
    </form>
    </div>';
    
  document.body.innerHTML += elem;
  document.getElementById('add-tag').addEventListener("click", function () {
    
    const Http = new XMLHttpRequest();
    const url = document.getElementById('url-input').value;
    Http.open("GET", url);
    Http.send();
      
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    };
      
    document.getElementById('bookmarklet').remove();
  });
}());
