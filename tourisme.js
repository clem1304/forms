/*Theme*/

const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('darkmode');
       
}

/*Coupon*/



function onloadPage() {
    document.getElementById('coupon').style.visibility="visible";
}

function closeCoupon() {
    document.getElementById('coupon').style.visibility="hidden";
}



/*Geolocation*/


/*Forms*/

function validateFname() {
    let fname = document.getElementById('fname').value;
    let fout = document.getElementById('fout');
    let fdiv = document.getElementById('fdiv');
    if (fname.trim().length == 0) {
        fout.innerText="*mandatory*";
        fdiv.classList.add('has-error');
    }
        else {
            fout.innerText = "";
            fdiv.classList.remove('has-error');
            fdiv.classList.add('has-success');
        }
    }

    function validateLname() {
        let lname = document.getElementById('lname').value;
        let lout = document.getElementById('lout');
        let ldiv = document.getElementById('ldiv');
        if (lname.trim().length == 0) {
            lout.innerText="*mandatory*";
            ldiv.classList.add('has-error');
        }
            else {
                lout.innerText = "";
                ldiv.classList.remove('has-error');
                ldiv.classList.add('has-success');
            }
        }


const validateEmail = () => {
    let email = document.getElementById('email').value;
    let email_out = document.getElementById('email_out');
    if (email.trim().length == 0) {
        email_out.innerText="*mandatory*"

} else {
    if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null) {
        email_out.innerText= "Enter a valid email address"
    }
    else{
        email_out.innerText="";
    }
    
}
}
