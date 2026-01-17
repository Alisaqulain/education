export const metadata = {
  title: 'My Assignments - Edgen Institute',
  description: 'View and submit your assignments on Edgen Institute.',
}

export default function Assignments() {
  const assignments = [
    {
      id: 1,
      course: 'Advanced Mathematics',
      title: 'Calculus Problem Set 3',
      dueDate: '2024-01-25',
      status: 'pending',
      submitted: false,
      grade: null,
    },
    {
      id: 2,
      course: 'English Conversation',
      title: 'Essay: My Learning Journey',
      dueDate: '2024-01-22',
      status: 'submitted',
      submitted: true,
      grade: 'A',
    },
    {
      id: 3,
      course: 'Python Programming',
      title: 'Build a Calculator App',
      dueDate: '2024-01-20',
      status: 'graded',
      submitted: true,
      grade: '95/100',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'submitted': return 'bg-blue-100 text-blue-800'
      case 'graded': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            My <span className="gradient-text">Assignments</span>
          </h1>
          <p className="text-gray-600">Track and submit your assignments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-yellow-600 mb-1">
              {assignments.filter(a => a.status === 'pending').length}
            </div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {assignments.filter(a => a.status === 'submitted').length}
            </div>
            <div className="text-sm text-gray-600">Submitted</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {assignments.filter(a => a.status === 'graded').length}
            </div>
            <div className="text-sm text-gray-600">Graded</div>
          </div>
        </div>

        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="bg-white rounded-xl border-2 border-gray-100 hover:border-primary transition-all p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-500">{assignment.course}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(assignment.status)}`}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{assignment.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Due: {assignment.dueDate}</span>
                    {assignment.grade && (
                      <span className="font-semibold text-primary">Grade: {assignment.grade}</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  {!assignment.submitted ? (
                    <a
                      href={`/student/assignments/${assignment.id}/submit`}
                      className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-sm whitespace-nowrap"
                    >
                      Submit Assignment
                    </a>
                  ) : (
                    <a
                      href={`/student/assignments/${assignment.id}`}
                      className="bg-white border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-sm whitespace-nowrap"
                    >
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



