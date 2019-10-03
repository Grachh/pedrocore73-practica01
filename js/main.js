var check = document.getElementById('check');
var overlay = document.getElementById('overlay');
var modal = document.getElementById('modal');
var account = document.getElementById('account');
var form = document.getElementsByTagName('form')[0];
var welcome = document.getElementById('welcome');

function openModal() {
    overlay.style.display = 'block';
    setTimeout(function(){
        overlay.style.opacity = '1';
    }, 100);
    modal.style.display = 'block';
    setTimeout(function(){
        modal.style.opacity = '1';
    }, 100);
}

function closeModal() {
    overlay.style.opacity = '0';
    setTimeout(function(){
        overlay.style.display = 'none';
    }, 500);
    modal.style.opacity = '0';
    setTimeout(function(){
       modal.style.display = 'none'; 
    }, 500);
    account.removeAttribute('disabled');
    check.style.pointerEvents = 'none';
}

function createAccount() {
    document.body.removeChild(form);
    document.body.style.background = "white";
    welcome.style.display = "block";
}