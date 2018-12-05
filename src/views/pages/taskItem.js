import Utils from './../../services/Utils.js'

let getTask = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://5c07feb5646dca0013f87eba.mockapi.io/tasks/` + id, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let TaskItem = {

    render : async () => {
        let request = Utils.parseRequestURL()
        let task = await getTask(request.id)

        return `
            <section class="section">
                <h1> Task Id : ${task.id}</h1>
                <p> Task Description : ${task.description} </p>
                <p> Task Notes : ${task.notes} </p>
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default TaskItem;
