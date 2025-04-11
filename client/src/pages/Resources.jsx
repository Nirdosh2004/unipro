import { resources } from "../assets/assets";

const Resources = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Resources Hub</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access curated educational materials across multiple disciplines. All resources are organized by subject and include downloadable content.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {resources.map(resource => (
          <div
            key={resource.id}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white flex flex-col h-full"
          >
            <div className="mb-3">
              <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full">
                {resource.subjectName}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">{resource.topicName}</h3>
              <p className="text-sm text-gray-500">{resource.courseName} • {resource.teacherName}</p>
            </div>

            <p className="text-gray-700 text-sm mb-4 flex-grow">{resource.bio}</p>

            <div className="mt-auto">
              <a
                href={resource.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Access Resources
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Request Additional Resources
        </button>
      </div>
    </div>
  );
};

export default Resources