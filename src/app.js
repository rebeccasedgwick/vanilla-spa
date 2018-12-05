import Navbar       from './views/components/navbar.js'
import Footerbar    from './views/components/footerbar.js'

import Utils        from './services/utils.js'

import Home         from './views/pages/home.js'
import TaskItem     from './views/pages/taskItem.js'
import Error404     from './views/pages/error404.js'


// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : Home
    , '/task/:id'   : TaskItem
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');

    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Footerbar.render();
    await Footerbar.after_render();


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    // Get the page from the hash of supported routes.
    // If parsed URL is not in the list of supported routes, select 404 page
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();

}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
