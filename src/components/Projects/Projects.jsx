import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";


const Projects = () => {
  return (
    <div id="projects" className="max-w-11/12 mx-auto px-3 py-15">
      <FeaturedProjects/>

      <OtherProjects />
    </div>
  );
};

export default Projects;
