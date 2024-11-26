import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import StudyPartnerCard from '../components/StudyPartnerCard';
import { ALL_PARTNERS } from '../data/partners';

export default function FindPartners() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = [...new Set(ALL_PARTNERS.flatMap(partner => partner.subjects))];

  const filteredPartners = ALL_PARTNERS.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSubject = !selectedSubject || partner.subjects.includes(selectedSubject);

    return matchesSearch && matchesSubject;
  });

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, location, or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="md:w-64">
              <div className="relative">
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                >
                  <option value="">All Subjects</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.map((partner) => (
            <StudyPartnerCard key={partner.name} {...partner} />
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No study partners found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}