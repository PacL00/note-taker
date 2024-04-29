const router = require("express").Router();
const fs = require("fs");
const uuid4 = require("uuid4");

router.get("/notes", (req, res) => {
    let notes = JSON.parse(fs.readFileSync("db/db.json"));
    res.json(notes);
});            

router.post("/notes", (req, res) => {
    let notes = JSON.parse(fs.readFileSync("db/db.json"));
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid4()
    };
    notes.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(notes));
    res.json(notes);
    });

module.exports = router;