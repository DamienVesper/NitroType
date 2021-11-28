/**********************************************

     Ray-Adams/NitroType-Account-Generator
       Jun 6, 2020 - Updated Aug 5, 2020
     
**********************************************/

// Bookmarklet:
// javascript:void((()=>{let s=document.createElement('script');s.type='text/javascript';s.src='https://cdn.jsdelivr.net/gh/Ray-Adams/NitroType-Account-Generator@latest/account_generator.js';document.body.appendChild(s)})())

// Rate limited at ~30 accounts -- as of June, 2020

(async () => {
    var baseUsername = prompt('Enter base username:'), password = prompt('Enter password:'), amount = prompt('Enter the number of accounts:');

    post = async (url, data) => {
        var response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data 
        });
        return response.json(); 
    }
  
    alert(`Attempting to generate ${amount} accounts... Please wait for the next alert.`)

    for (var i = 0; i < parseInt(amount); i++) {
        post('https://www.nitrotype.com/api/register', `acceptPolicy=true&email=&password=${password}&receiveContact=&username=${baseUsername+i}`)
        .then(response => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error);
        });
    };

  alert('Operation complete. Check the console for individual HTTP responses.')
})();
