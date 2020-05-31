# NitroType GET Requests
A convenient bookmarklet that requests data from the Nitro Type API.

## Installation
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:(function() {var elem = '<div id="bookmarklet" style="position:fixed; background: #FFF;%20border:%201px%20#000%20solid;%20right:50px;%20top:50px;%20z-index:1000;%20width:250px;"><form><label%20for="url">URL:</label><select%20name="url-input"%20id="url-input"><option%20value="https://www.nitrotype.com/api/settings">*/settings</option><option%20value="https://www.nitrotype.com/api/stats/summary">*/stats/summary</option><option%20value="https://www.nitrotype.com/api/auth/facebook">*/auth/facebook</option><option%20value="https://www.nitrotype.com/api/friends">*/friends</option><option%20value="https://www.nitrotype.com/api/referrals">*/referrals</option><option%20value="https://www.nitrotype.com/api/stats/graphs/lastdays">*/stats/graphs/lastdays</option><option%20value="https://www.nitrotype.com/api/stats/graphs/racelog">*/stats/graphs/racelog</option><option%20value="https://www.nitrotype.com/api/teams/applications">*/teams/applications</option></select><br><br><button%20id="add-tag"><strong>Click%20to%20Submit</strong></button></form></div>';document.body.innerHTML%20+=%20elem;document.getElementById('add-tag').addEventListener("click",%20function%20()%20{const%20Http%20=%20new%20XMLHttpRequest();const%20url%20=%20document.getElementById('url-input').value;Http.open("GET",%20url);Http.send();Http.onreadystatechange%20=%20(e)%20=>%20{console.log(Http.responseText)};document.getElementById('bookmarklet').remove();});}());
```
**NOTE**: You can view the beautified JS file here: [bookmarklet.beautified.js](../master/bookmarklet.beautified.js)

## Usage
1. Login to Nitro Type at https://www.nitrotype.com/login
2. Go to Chrome developer tools (`Cmd + Option + J` for Mac, `Ctrl + Shift + J` for Windows) OR Firefox Web Console (`Option + Cmd + K` for Mac, `Ctrl + Shift + K` for Windows).
3. Click on the bookmarklet, and a small UI element will appear on the top right of the page.
4. Using the dropdown menu, select your desired endpoint, and click the "Click to Submit" button.
5. The UI element will now be removed, and your requested data will be logged in the console.

## Endpoints
* `*/settings`
* `*/stats/summary`
* `*/auth/facebook`
* `*/friends`
* `*/referrals`
* `*/stats/graphs/lastdays`
* `*/stats/graphs/racelog`
* `*/teams/applications`

## Compatibility
Browser | Supported
--------|------------
Chrome |     ✓
Firefox|     ✓
Safari |     ✗
