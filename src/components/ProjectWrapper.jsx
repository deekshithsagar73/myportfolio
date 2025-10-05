import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import GenericProject from '../pages/GenericProject';

const ProjectWrapper = () => {
  const { projectId } = useParams();
  
  // Find project by title or create a slug-based lookup
  const project = projects.find(p => {
    const slug = p.title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    return slug === projectId;
  });

  return <GenericProject project={project} />;
};

export default ProjectWrapper;
