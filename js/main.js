const form = document.getElementById('form');
const inputList = form.getElementsByTagName('input');

function setInputFailed(input, status = true) {
    input.style.border = `1px solid ${status ? 'red' : 'black'}`;
}

function retrieveFormValue(event) {
    event.preventDefault();

    let bFail = false;

    for (let iInput = 0; iInput < inputList.length; ++iInput) {
        const input = inputList[iInput];

        const inputValue = input.value;

        let bInputFail = false;

        if (!inputValue.length) {
            bFail = bInputFail = true;
        }

        switch (input.getAttribute('name')) {
            case 'email':
                if (!inputValue.includes('@')) {
                    bFail = bInputFail = true;
                }
            break;
            case 'password':
                if (inputValue.length < 8) {
                    bFail = bInputFail = true;
                }
            break;
            case 'rePassword':
                const passwordInput = document.getElementById('password');

                if (passwordInput.value != inputValue) {
                    bFail = bInputFail = true;
                }
            break;
        }

        setInputFailed(input, bInputFail);
    }

    if (!bFail) {
        alert("Hi")
    }
}

form.addEventListener('submit', retrieveFormValue);
