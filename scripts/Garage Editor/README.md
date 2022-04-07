# Nitro Type Garage Editor
Easily add or remove garage sections on NitroType.com

## Installation
Copy and paste the code below into the URL section of a new bookmark.
```js
javascript:(async(a,b='',c,d=JSON.parse(JSON.parse(localStorage['persist:nt']).user).garage)=>{if(!a)return;for(c=0;c<a*30;c++)b+=`garage%5B${c}%5D=${d[c]||''}&`;await fetch('api/v2/loot/arrange-cars',{'headers':{'Authorization':'Bearer '+localStorage.player_token,'Content-Type':'application/x-www-form-urlencoded'},'body':b,'method':'POST','mode':'cors'});alert`Logging you out... Please log back in to see changes.`;document.querySelector('a.dropdown-link[href="/"]').click()})(prompt`Number of garage sections (~30 max):`)
```

## Please Note
Maximum number of garage sections: **~30** (subject to change)

## Release History
* 2.1.0 - Jan 19, 2022
  * No longer rearranges your entire garage
* 2.0.0 - Jan 18, 2022
  * Update API endpoint
  * Update to new auth method
  * Switch to DOM logout

## Acknowledgements
* [Nate Dogg](https://www.nitrotype.com/racer/nathaniel818) (requested v2 fix)
