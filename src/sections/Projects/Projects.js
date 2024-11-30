import React, { useState } from "react";
import "./Projects.css";
// import ProjectData from "../../Data/ProjectData";
import { ModalProject, Project, ProjectContext } from "../../component";
const ProjectSection = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const ProjectValues = {
    showModal,
    setShowModal,
    currentImages,
    setCurrentImages,
  };

  return (
    <>
      <ProjectContext.Provider value={ProjectValues}>
        <Project api={props.api} />
        <ModalProject />
      </ProjectContext.Provider>
    </>
  );
};

export default ProjectSection;
