import React, { useState } from "react";
import { Modal, Carousel, Button } from "react-bootstrap";
import "./Projects.css";
import ProjectData from "../../Data/ProjectData";

const ProjectSection = () => {
  const Projects = ProjectData.map((project, index) => {
    return (
      <div key={project.id} className="project-grid">
            <div
              className="project-item"
              key={index}
              onClick={() => handleOpenModal(project.images)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <h2> {project.title}</h2>
                <p> {project.description}</p>
              </div>
            </div>
          </div>
    );
  });

  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const handleOpenModal = (images) => {
    setCurrentImages(images);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {Projects}
      <Modal
        show={showModal}
        fullscreen={true}
        onHide={handleCloseModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {currentImages.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-image-wrapper">
                  <img
                    className="carousel-image"
                    src={image}
                    alt={`slide ${index}`}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectSection;
