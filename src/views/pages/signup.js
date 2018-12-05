let Signup = {

    render: async () => {
        return `
            <section class="">
                <div class="">
                    <p class="">
                        <input class="input" id="email_input" type="email" placeholder="Enter your email address">
                    </p>
                </div>
                <div class="field">
                    <p class="">
                        <input class="input" id="password_input" type="password" placeholder="Enter a password">
                    </p>
                </div>
                <div class="field">
                    <p class="">
                        <input class="input" id="repeat_password_input" type="password" placeholder="Re-enter password">
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button id="signup_submit_btn">Signup</button>
                    </p>
                </div>
            </section>
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be signed up only after the DOM has been painted
    , after_render: async () => {
        document.getElementById("signup_submit_btn").addEventListener ("click", () => {
            let email           = document.getElementById("email_input");
            let password        = document.getElementById("password_input");
            let repeatPassword  = document.getElementById("repeat_password_input");
            if (password.value != repeatPassword.value) {
                alert (`These passwords don't match`)
            } else if (email.value == '' | password.value == '' | repeatPassword == '') {
                alert (`The fields cannot be empty`)
            }
            else {
                alert(`User with email ${email.value} was successfully submitted!`)
            }
        })
    }
}

export default Signup;
