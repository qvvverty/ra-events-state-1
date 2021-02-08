import PropTypes from 'prop-types';

export default function ProjectList(props) {
  const { projects } = props;
  let projectKey = 0;

  return (
    <div>
      {
        projects.map(project => {
          return <img key={projectKey += 1} className="project-img" src={project.img} category={project.category} alt={project.category}/>
        })
      }
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    category: PropTypes.string
  }))
}
