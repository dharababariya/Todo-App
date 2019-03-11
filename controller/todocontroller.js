//add task

const task = ["buy stock", "pratice with nodejs"];
const complete = ["finish jquery"];

module.exports = function (app) {

    app.get('/', (req, res) => {

        res.render('to-do', {task: task});
    });

    //post route
    app.post('/addtask', (req, res) => {

        const newTask = req.body.newtask;
        task.push(newTask);
        res.redirect('/');
    });
    
 //remove task
    
        app.post('/removetask', function (req, res) {

            
            const completeTask = req.body.check;

            if (typeof completeTask === "string") {
                complete.push(completeTask);

                task.splice(task.indexOf(completeTask), 1);
            } else if (typeof completeTask === "object") {
                for (var i = 0; i < completeTask.length; i++) {
                    complete.push(completeTask[i]);
                    task.splice(task.indexOf(completeTask[i]), 1);
                }
            }
            res.redirect("/");
        })

    }