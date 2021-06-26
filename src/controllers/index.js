const Task = require("../models/tasks"),  //busca las tareas en la db
index = async (req, res) => {
    tasks = await Task.find()
    console.log(tasks)
    res.render("index", {title: "Bienvenido", tasks: tasks})
}, add = async (req, res) => {
    tasks = await Task.find()
    const task = new Task(req.body);
    await task.save()
    console.log(req.body);
    res.render("add", {title: "Task Added!", newTask: task}) //puede estar comentada
    // res.redirect("/")
}, deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect("/");
}, patchTask = async (req, res) => {
    const { id } = req.params, 
    task = await Task.findById(id);
    task.status = !task.status;
    await task.save()
    res.redirect("/")
}, sendPutTask = async (req, res) => {
    const { id } = req.params,
    task = await Task.findById(id)
    res.render("edit", {title: "editar", task: task})
}, putTask = async (req, res) => {
    const { id } = req.params;
    await Task.update({_id: id}, req.body); //busca y después encuentra
    res.redirect("/")
};

module.exports = { index, add, deleteTask, patchTask, putTask, sendPutTask }