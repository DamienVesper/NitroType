/**********************************************

      Ray-Adams/NitroType-Garage-Editor
     Jun 2, 2020 - Updated Aug 17, 2021

**********************************************/

// Bookmarklet:
// javascript:(async(a,b=prompt`Enter the number of garage sections you would like to have in total (NOTE: There are 30 individual garage slots per section):`,c='',d)=>{if(b===null)return;for(d=0;d<b*30;d++)c+=`garage%5B${d}%5D=&`;await fetch('https://www.nitrotype.com/api/cars-arrange',{'headers':{'Content-Type':'application/x-www-form-urlencoded'},'body':c+a,'method':'POST','mode':'cors'});alert`Logging you out... Please log back in to see changes.`;await fetch('https://www.nitrotype.com/api/logout',{'headers':{'Content-Type':'application/x-www-form-urlencoded'},'body':a,'method':'POST','mode':'cors'});location.reload()})(`uhash=${encodeURI(document.cookie.match`(^|;) *ntuserrem=([^;]*)`[2])}`)

(async () => {

    const garageSections = prompt('Enter the number of garage sections you would like to have in total (NOTE: There are 30 individual garage slots per section):');
    
    if (garageSections === null) return;
    
    /* Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie */
    const getCookieValue = name => {
        return document.cookie
            .split('; ')
            .find(element => element.startsWith(name + '='))
            .split('=')[1];
    };
    
    const uhashParameter = 'uhash=' + getCookieValue('ntuserrem');
  
    let i, garageParameter = '';

    for (i = 0; i < garageSections * 30; i++) {
        garageParameter += 'garage%5B' + i + '%5D=&';
    };
  
  
    await fetch("https://www.nitrotype.com/api/cars-arrange", {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": garageParameter + uhashParameter,
      "method": "POST",
      "mode": "cors"
    });
    
    alert("Logging you out... Please log back in to see changes.");

    await fetch("https://www.nitrotype.com/api/logout", {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": uhashParameter,
      "method": "POST",
      "mode": "cors"
    });

    location.reload();

})()
