import { useState } from 'react';
import { Users, Plus, BookOpen, Calendar } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface StudyGroup {
  id: string;
  name: string;
  subject: string;
  members: number;
  maxMembers: number;
  schedule: string;
  description: string;
}

const STUDY_GROUPS: StudyGroup[] = [
  {
    id: '1',
    name: 'Advanced Calculus Study Group',
    subject: 'Mathematics',
    members: 4,
    maxMembers: 6,
    schedule: 'Mon, Wed 7-9 PM',
    description: 'Deep dive into multivariable calculus and differential equations.'
  },
  {
    id: '2',
    name: 'Organic Chemistry Group',
    subject: 'Chemistry',
    members: 5,
    maxMembers: 8,
    schedule: 'Tue, Thu 6-8 PM',
    description: 'Weekly practice sessions focusing on reaction mechanisms.'
  },
  {
    id: '3',
    name: 'Algorithm Practice',
    subject: 'Computer Science',
    members: 3,
    maxMembers: 5,
    schedule: 'Sat 2-4 PM',
    description: 'Solving algorithmic problems and discussing solutions.'
  }
];

export default function StudyGroups() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleJoinGroup = (groupId: string) => {
    toast.success('Request to join group sent successfully!');
  };

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Study Groups</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-4 py-2 bg-secondary text-gray-800 rounded-md hover:bg-secondary/80 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create Group
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDY_GROUPS.map((group) => (
            <div key={group.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {group.subject}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {group.members}/{group.maxMembers}
                  </div>
                </div>

                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {group.schedule}
                </div>

                <p className="mt-3 text-sm text-gray-600">{group.description}</p>

                <button
                  onClick={() => handleJoinGroup(group.id)}
                  className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors"
                >
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}