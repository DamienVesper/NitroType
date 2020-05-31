# NitroType GET Requests
A convenient bookmarklet that requests data from the Nitro Type API.

## Installation
Copy and paste the code below into the URL section of a new bookmark. (TIP: Triple click the code below to quickly copy the bookmarklet's contents.)
```javascript
javascript:(function(){var elem='<div id="bookmarklet" style="position:fixed; background:#FFF; border: 1px #000 solid; right:50px; top:50px; z-index:1000; width:250px;"><form><label for="url">URL:</label><select name="url-input" id="url-input"><optgroup label="Authentication"><option value="https://www.nitrotype.com/api/auth/facebook">*/auth/facebook</option</optgroup><optgroup label="Classes"><option value="https://www.nitrotype.com/api/classes">*/classes</option></optgroup><optgroup label="Friends"><option value="https://www.nitrotype.com/api/friends">*/friends</option><option value="https://www.nitrotype.com/api/friend-requests">*/friend-requests</option></optgroup><optgroup label="News"><option value="https://www.nitrotype.com/api/news">*/news</option></optgroup><optgroup label="Purchase"><option value="https://www.nitrotype.com/api/purchase/refreshsession">*/purchase/refreshsession</option></optgroup><optgroup label="Referrals"><option value="https://www.nitrotype.com/api/referrals">*/referrals</option></optgroup><optgroup label="Settings"><option value="https://www.nitrotype.com/api/settings">*/settings</option></optgroup><optgroup label="Stats"><option value="https://www.nitrotype.com/api/stats/summary">*/stats/summary</option><option value="https://www.nitrotype.com/api/stats/graphs/bymonth">*/stats/graphs/bymonth</option><option value="https://www.nitrotype.com/api/stats/graphs/lastdays">*/stats/graphs/lastdays</option><option value="https://www.nitrotype.com/api/stats/graphs/racelog">*/stats/graphs/racelog</option><option value="https://www.nitrotype.com/api/stats/data/bymonth">*/stats/data/bymonth</option><option value="https://www.nitrotype.com/api/stats/data/lastdays">*/stats/data/lastdays</option><option value="https://www.nitrotype.com/api/stats/data/racelog">*/stats/data/racelog</option></optgroup><optgroup label="Teams"><option value="https://www.nitrotype.com/api/teams/applications">*/teams/applications</option></optgroup></select><br><br><button id="add-tag"><strong>Click to Submit</strong></button></form></div>';document.body.innerHTML += elem;document.getElementById('add-tag').addEventListener("click", function () {const Http = new XMLHttpRequest();const url = document.getElementById('url-input').value;Http.open("GET", url);Http.send();Http.onreadystatechange = (e) => {console.log(Http.responseText)};document.getElementById('bookmarklet').remove();});}());

```
**NOTE**: You can view the beautified JS file here: [bookmarklet.beautified.js](../master/bookmarklet.beautified.js)

## Usage
1. Login to Nitro Type at https://www.nitrotype.com/login
2. Go to Chrome developer tools (`Cmd + Option + J` for Mac, `Ctrl + Shift + J` for Windows) OR Firefox Web Console (`Option + Cmd + K` for Mac, `Ctrl + Shift + K` for Windows).
3. Click on the bookmarklet, and a small UI element will appear on the top right of the page.
4. Using the dropdown menu, select your desired endpoint, and click the "Click to Submit" button.
5. The UI element will now be removed, and your requested data will be logged in the developer console.

## Endpoints
The endpoints below are prepended by the base API URL: `https://www.nitrotype.com/api/*`

### Authentication
* `*/auth/facebook`

### Classes
* `*/classes`

### Friends
* `*/friends`
* `*/friend-requests`

### News
* `*/news`

### Purchase
* `*/purchase/refreshsession`

### Referrals
* `*/referrals`

### Settings
* `*/settings`

### Stats
* `*/stats/summary`
* `*/stats/graphs/bymonth`
* `*/stats/graphs/lastdays`
* `*/stats/graphs/racelog`
* `*/stats/data/bymonth`
* `*/stats/data/lastdays`
* `*/stats/data/racelog`

### Teams
* `*/teams/applications`

## Compatibility
Browser | Supported
--------|------------
Chrome |     ✓
Firefox|     ✓
Safari |     ✗
