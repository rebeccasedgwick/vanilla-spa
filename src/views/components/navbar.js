let Navbar = {
    render: async () => {
        let view =  `
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            <img src="" width="" height="">
                        </a>
                    </div>
                    <div>
                        <div class="navbar-start">
                            <a class="navbar-item" href="/#/">
                                Home
                            </a>
                            <a class="navbar-item" href="/#/forbidden">
                                Forbidden
                            </a>
                        </div>
                        <div class="">
                            <div class="">
                                <div class="">
                                    <a class="" href="/#/signup">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a class="button">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;
