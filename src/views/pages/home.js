// --------------------------------
//  Define Data Sources
// --------------------------------

let getTasksList = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://5c07feb5646dca0013f87eba.mockapi.io/task`, options)
        const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting tasks', err)
    }
}

let Home = {
    render : async () => {
        let tasks = await getTasksList()
        let view = `
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${ tasks.map(task =>
                        `<li><a href="#/task/${task.id}">${task.description}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;
