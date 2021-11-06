let ipRegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;

document.querySelector('form button').addEventListener('click', test);

function test(e) {
    e.preventDefault();
    if ((document.querySelector('form input').value).match(ipRegExp))
        console.log('correct')
    else
        console.log('fail');
} 