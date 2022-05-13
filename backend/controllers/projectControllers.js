const express = require("express");
const projects = express.Router();
const {
  getAllProjects,
  createProject,
  getOneProject,
} = require("../queries/projectsQueries");

//get all project
projects.get("/", async (_, res) => {
  const allProjects = await getAllProjects();
  if (allProjects.length === 0) {
    res.status(404).json({ error: "error" });
  } else {
    res.status(200).json(allProjects);
  }
});

//get one project
projects.get("/:pid", async (req, res) => {
  const { pid } = req.params;
  const singleProject = await getOneProject(pid);
  res.status(200).json(singleProject);
});

//create project
projects.post("/", async (req, res) => {
  const addProject = await createProject(req.body);
  res.status(200).json(addProject);
});
module.exports = projects;