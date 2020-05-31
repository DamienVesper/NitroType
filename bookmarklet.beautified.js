javascript:(function(){
  
  var elem='
    <div id="bookmarklet" style="
      position: fixed;
      background: #FFF; 
      border: 1px #000 solid; 
      right: 50px; 
      top: 50px; 
      z-index: 1000; 
      width: 250px;
    ">
  
    <form>
      
      <label for="url">
        URL:
      </label>
  
      <select name="url-input" id="url-input">
        
	<optgroup label="Authentication">
	  <option value="https://www.nitrotype.com/api/auth/facebook">
            */auth/facebook
          </option>
	</optgroup>
  
	<optgroup label="Classes">
	  <option value="https://www.nitrotype.com/api/classes">
            */classes
          </option>
	</optgroup>
	    
        <optgroup label="Friends">
	  <option value="https://www.nitrotype.com/api/friends">
            */friends
          </option>
	</optgroup>
  
	<optgroup label="News">
	  <option value="https://www.nitrotype.com/api/news">
            */news
          </option>
	</optgroup>
  
	<optgroup label="Purchase">
	  <option value="https://www.nitrotype.com/api/purchase/refreshsession">
            */purchase/refreshsession
          </option>
	</optgroup>
	
        <optgroup label="Referrals">
	  <option value="https://www.nitrotype.com/api/referrals">
            */referrals
          </option>
	</optgroup>       
  
	<optgroup label="Settings">
	  <option value="https://www.nitrotype.com/api/settings">
            */settings
          </option>
	</optgroup>
	
        <optgroup label="Stats">
          <option value="https://www.nitrotype.com/api/stats/summary">
           */stats/summary
          </option>
	  <option value="https://www.nitrotype.com/api/stats/graphs/bymonth">
            */stats/graphs/bymonth
          </option>
       	  <option value="https://www.nitrotype.com/api/stats/graphs/lastdays">
            */stats/graphs/lastdays
          </option>
          <option value="https://www.nitrotype.com/api/stats/graphs/racelog">
            */stats/graphs/racelog
          </option>
          <option value="https://www.nitrotype.com/api/stats/data/bymonth">
            */stats/data/bymonth
          </option>
	  <option value="https://www.nitrotype.com/api/stats/data/lastdays">
            */stats/data/lastdays
          </option>
	  <option value="https://www.nitrotype.com/api/stats/data/racelog">
            */stats/data/racelog
          </option>
        </optgroup>
	   
        <optgroup label="Teams">
	  <option value="https://www.nitrotype.com/api/teams/applications">
            */teams/applications
          </option>
	</optgroup>
  
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
