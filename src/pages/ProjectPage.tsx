import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data'; // Import data from the central file

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container-full py-20 text-center bg-background text-text min-h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4">The project you are looking for does not exist.</p>
        <Link to="/portfolio" className="mt-6 inline-block text-secondary hover:underline">
          Go back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="container-full py-16 bg-background">
      <div className="bg-card-bg rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-5xl font-black text-text">{project.title}</h1>
            <p className="mt-4 text-lg text-text leading-relaxed">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-8 py-3 bg-secondary text-white font-bold rounded-full hover:bg-blue-700 transition-colors text-lg"
            >
              View Live Project
            </a>
          </div>
          <div className="md:w-1/3 flex-shrink-0">
            <img src={project.image} alt={project.title} className="w-full rounded-xl shadow-md" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link to="/portfolio" className="text-lg text-secondary hover:underline">
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;