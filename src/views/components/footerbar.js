let Footerbar = {
    render: async () => {
        let view =  `
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    This is a footer, where links about privacy and policies live.
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Footerbar;
