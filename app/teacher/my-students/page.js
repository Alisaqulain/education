export const metadata = {
  title: 'My Students - Edgen Institute',
  description: 'Manage your students on Edgen Institute.',
}

export default function MyStudents() {
  const students = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      courses: ['Advanced Mathematics'],
      sessions: 12,
      lastActive: '2024-01-15',
      status: 'active',
    },
    {
      id: 2,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      courses: ['English Conversation'],
      sessions: 8,
      lastActive: '2024-01-14',
      status: 'active',
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael@example.com',
      courses: ['Python Programming'],
      sessions: 15,
      lastActive: '2024-01-10',
      status: 'inactive',
    },
  ]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              My <span className="gradient-text">Students</span>
            </h1>
            <p className="text-gray-600">Manage and communicate with your students</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-sm">
              Export List
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">{students.length}</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">
              {students.filter(s => s.status === 'active').length}
            </div>
            <div className="text-sm text-gray-600">Active Students</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">
              {students.reduce((sum, s) => sum + s.sessions, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Sessions</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Courses</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sessions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-600">{student.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{student.courses.join(', ')}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{student.sessions}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{student.lastActive}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <a
                          href={`/teacher/students/${student.id}`}
                          className="text-primary hover:text-primary-dark font-medium text-sm"
                        >
                          View
                        </a>
                        <a
                          href={`/teacher/messages?student=${student.id}`}
                          className="text-primary hover:text-primary-dark font-medium text-sm"
                        >
                          Message
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}








