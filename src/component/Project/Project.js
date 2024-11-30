import React, { useContext } from "react";
import ProjectContext from "../ProjectContext/ProjectContext";
import "./Project.css";
// import useFetch from "hooks/useFetch";
import { LiaExpandSolid } from "react-icons/lia";
import ProjectData from './../../Data/ProjectData';

function Project(props) {
  const { setCurrentImages, setShowModal} = useContext(ProjectContext);
  const handleOpenModal = (images) => {
    console.log(images);
    setCurrentImages(images);
    setShowModal(true);
  };

  return(
    <>
        <div className="project-container">
          {ProjectData.map((project, index) => {
            console.log(project.Horizontal)
            const isHorizontal = project.Horizontal == "true";
            console.log(isHorizontal)
            const isEven = index % 2 === 0;
            return (
              <div
                className={
                  isHorizontal
                    ? "Horizontal"
                    : `project-item ${isEven ? "" : ""}`
                }
                onClick={() => handleOpenModal(project.projectImg)}
                key={index}
              >
                <div className="project-image">
                  <div className="overlay">
                    <div
                      className="btns"
                      onClick={() => handleOpenModal(project.projectImg)}
                    >
                      <LiaExpandSolid />
                    </div>
                  </div>
                  <img
                    src={project.projectImg[0]}
                    alt={project.projectTitle}
                  />
                </div>
                <div className="project-text">
                  <h2> {project.projectTitle}</h2>
                  <p> {project.projectDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
  )

//   const { loading, error, data } = useFetch(
//     `${process.env.REACT_APP_BASE_URL}/api/${props.api}?populate=*`
//   );
//   if (loading)
//     return (
//       <>
//         {/* <Container>
//       <div className="box">
//       <div class="spinner-border" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>
//       </div>
//     </Container> */}
//       </>
//     );
//   if (error) return <p>Error ..........</p>
//   if (data) {
//     return (
//       <>
//         <div className="project-container">
//           {data.data.map((project, index) => {
//             console.log(project.Horizontal)
//             const isHorizontal = project.Horizontal;
//             console.log(isHorizontal)
//             const isEven = index % 2 === 0;
//             return (
//               <div
//                 className={
//                   isHorizontal
//                     ? "Horizontal"
//                     : `project-item ${isEven ? "" : ""}`
//                 }
//                 onClick={() => handleOpenModal(project.projectImg)}
//                 key={index}
//               >
//                 <div className="project-image">
//                   <div className="overlay">
//                     <div
//                       className="btns"
//                       onClick={() => handleOpenModal(project.projectImg)}
//                     >
//                       <LiaExpandSolid />
//                     </div>
//                   </div>
//                   <img
//                     src={`${process.env.REACT_APP_BASE_URL}${project.projectImg[0].url}`}
//                     alt={project.projectTitle}
//                   />
//                 </div>
//                 <div className="project-text">
//                   <h2> {project.projectTitle}</h2>
//                   <p> {project.projectDescription}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   } 
  
}

export default Project;
