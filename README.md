# NitroType GET Requests
A convenient bookmarklet that requests data from the Nitro Type API.

## Installation
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:(function(){var e=document.createElement('script');e.type='text/javascript';e.src='https://cdn.jsdelivr.net/gh/Ray-Adams/NitroType-Get-Requests/get_requests.js';document.getElementsByTagName('body')[0].appendChild(e);})();
```
**NOTE**: You can view the source file here: [get_requests.js](../master/get_requests.js)

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
