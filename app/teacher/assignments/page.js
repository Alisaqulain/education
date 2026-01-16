'use client'

import { useState } from 'react'

export default function TeacherAssignments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      course: 'Advanced Mathematics',
      title: 'Calculus Problem Set 3',
      dueDate: '2024-01-25',
      submissions: 12,
      graded: 8,
    },
    {
      id: 2,
      course: 'English Conversation',
      title: 'Essay: My Learning Journey',
      dueDate: '2024-01-22',
      submissions: 15,
      graded: 15,
    },
  ])

  const [showCreateModal, setShowCreateModal] = useState(false)

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="gradient-text">Assignments</span>
            </h1>
            <p className="text-gray-600">Create and grade student assignments</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            + Create Assignment
          </button>
        </div>

        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="bg-white rounded-xl border-2 border-gray-100 hover:border-primary transition-all p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-2">{assignment.course}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{assignment.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Due: {assignment.dueDate}</span>
                    <span>{assignment.submissions} submissions</span>
                    <span>{assignment.graded} graded</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`/teacher/assignments/${assignment.id}/submissions`}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-sm whitespace-nowrap"
                  >
                    Grade ({assignment.submissions - assignment.graded})
                  </a>
                  <a
                    href={`/teacher/assignments/${assignment.id}/edit`}
                    className="px-4 py-2.5 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-sm"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

