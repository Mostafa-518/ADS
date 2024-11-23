import React, { useState } from "react";
import { Modal, Carousel, Button } from "react-bootstrap";
import "./Projects.css";
import project1_0 from "../../assets/images/Projekte/1.0.jpg";
import project1_1 from "../../assets/images/Projekte/1.1.jpg";
import project2_0 from "../../assets/images/Projekte/2.0.jpg";
import project2_2 from "../../assets/images/Projekte/2.2.jpg";
import project2_3 from "../../assets/images/Projekte/2.3.jpg";
import project2_4 from "../../assets/images/Projekte/2.4.jpg";
import project3_0 from "../../assets/images/Projekte/3.0.jpg";
import project3_1 from "../../assets/images/Projekte/3.1.jpg";
import project3_2 from "../../assets/images/Projekte/3.2.jpg";
import project3_3 from "../../assets/images/Projekte/3.3.jpg";
import project3_4 from "../../assets/images/Projekte/3.4.jpg";
import project4_0 from "../../assets/images/Projekte/4.0.jpg";
import project4_1 from "../../assets/images/Projekte/4.1.jpg";
import project5_0 from "../../assets/images/Projekte/5.0.jpg";
import project5_1 from "../../assets/images/Projekte/5.1.jpg";
import project5_2 from "../../assets/images/Projekte/5.2.jpg";
import project5_3 from "../../assets/images/Projekte/5.3.jpg";
import project5_4 from "../../assets/images/Projekte/5.4.jpg";
import project5_5 from "../../assets/images/Projekte/5.5.jpg";

const projects = [
  {
    id: 1,
    title: "TextTextTextTextText",
    description: "csdcsdcsdcdsdsdsdsadösajdnaü0fhweoüfihwe",
    images: [project2_0,project2_2,project2_3,project2_4],
    alt: "Project 1",
  },
  {
    id: 2,
    title: "TextTextTextTextText",
    description: "bnjkbcjfhweoüfihwe",
    images: [project3_0, project3_1, project3_2, project3_3, project3_4],
    alt: "Project 2",
  },
  {
    id: 3,
    title: "TextTextTextTextText",
    description: "casfaskfklasmfkleoüfihwe",
    images: [project4_0, project4_1],
    alt: "Project 3",
  },
  {
    id: 4,
    title: "TextTextTextTextText",
    description: "casfaskfklasmfkleoüfihwe",
    images: [project5_0, project5_1, project5_2, project5_3, project5_4, project5_5],
    alt: "Project 4",
  },
  {
    id: 5,
    title: "TextTextTextTextText",
    description: "casfaskfklasmfkleoüfihwe",
    images: [project1_0, project1_1],
    alt: "Project 5",
  },
];

const Projects = () => {
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
      <div className="project-grid">
        {projects.map((project, index) => (
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
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

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

export default Projects;
