import { Book, Video, FileText, Download } from 'lucide-react';

const RESOURCES = [
  {
    id: '1',
    title: 'Effective Study Techniques',
    type: 'Guide',
    description: 'Learn proven methods to improve your study efficiency and retention.',
    icon: Book,
    link: '#'
  },
  {
    id: '2',
    title: 'Time Management Workshop',
    type: 'Video',
    description: 'Master the art of balancing academics with other activities.',
    icon: Video,
    link: '#'
  },
  {
    id: '3',
    title: 'Subject Study Guides',
    type: 'Documents',
    description: 'Comprehensive study materials for various subjects.',
    icon: FileText,
    link: '#'
  }
];

export default function Resources() {
  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Study Resources</h1>
          <p className="mt-4 text-gray-600">Access curated study materials and guides to enhance your learning journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES.map((resource) => {
            const Icon = resource.icon;
            return (
              <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-gray-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                  <span className="inline-block px-2 py-1 mt-2 text-xs font-medium bg-soft text-gray-700 rounded-full">
                    {resource.type}
                  </span>
                  <p className="mt-3 text-gray-600">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="mt-4 inline-flex items-center text-primary hover:text-primary/80"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Access Resource
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Collections */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Exam Preparation</h3>
              <p className="mt-2 text-gray-600">Comprehensive guides and materials for exam success</p>
              <button className="mt-4 text-primary hover:text-primary/80 font-medium">
                View Collection →
              </button>
            </div>
            <div className="bg-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Research Methods</h3>
              <p className="mt-2 text-gray-600">Learn effective research and citation techniques</p>
              <button className="mt-4 text-primary hover:text-primary/80 font-medium">
                View Collection →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}