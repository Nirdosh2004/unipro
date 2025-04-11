import { assignments } from "../assets/assets";

export const Assignments = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Course Assignments</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          All your current assignments organized by due date. Stay on top of your coursework with clear requirements and deadlines.
        </p>
      </div>

      {/* Assignments Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map(assignment => (
          <div
            key={assignment.id}
            className="border border-green-200 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full min-h-[300px]"
          >
            <div className="mb-3">
              <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full">
                {assignment.subject}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">{assignment.topic}</h3>
              <p className="text-sm text-gray-500">{assignment.teacherName}</p>
            </div>

            <ul className="text-gray-700 text-sm mb-4 space-y-2 overflow-y-auto flex-grow pr-2">
              {assignment.body.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-100 pt-3 text-xs text-gray-500 mt-auto">
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Assigned: </span>
                  <span>{assignment.submitDate}</span>
                </div>
                <div>
                  <span className="font-medium">Due: </span>
                  <span className={new Date(assignment.dueDate) < new Date() ? 'text-red-500 font-semibold' : 'text-green-600'}>
                    {assignment.dueDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Need help with an assignment?</p>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Contact Instructor
        </button>
      </div>
    </div>
  );
};