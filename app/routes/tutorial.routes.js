module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    //create a new tutorial
    router.post("/", tutorials.create);

    //retrieve all tutorials
    router.get("/",tutorials.findAll);

    //retrieve get all puslihed tutorials
    router.get("/published", tutorials.findAllPublished);

    //retrieve a single tutorial with id
    router.get("/:id", tutorials.findOne);

    //update tutorial with id
    router.put("/:id", tutorials.update);

    //delete tutorial with id
    router.delete("/:id", tutorials.delete);

    //delete all tutorials
    router.delete("/", tutorials.deleteAll);

    //domain 
    app.use('/api/tutorials', router);

};