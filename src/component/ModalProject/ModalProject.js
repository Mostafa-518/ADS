import React, { useContext } from "react";
import { Modal, Carousel, Button } from "react-bootstrap";
import ProjectContext from "../ProjectContext/ProjectContext";
import "./ModalProject.css";

function ModalProject() {
  const { currentImages, showModal, setShowModal } = useContext(ProjectContext);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(currentImages)
  return (
    <>
      <Modal
        show={showModal}
        fullscreen={true}
        onHide={handleCloseModal}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel>
            {currentImages.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-image-wrapper">
                  <img
                    className="carousel-image"
                    src={`http://localhost:1337${image.url}`}
                    alt={`slide ${index}`}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProject;
