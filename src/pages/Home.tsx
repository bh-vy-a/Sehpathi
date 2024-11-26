import { Search, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import StudyPartnerCard from '../components/StudyPartnerCard';
import { FEATURED_PARTNERS } from '../data/partners';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Find Your Perfect Study Partner
            </h1>
            <p className="mt-4 text-xl">
              Connect with students who share your academic goals and study habits
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="flex shadow-sm rounded-md">
                <input
                  type="text"
                  placeholder="Search by subject, university, or location..."
                  className="flex-1 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button className="px-6 py-3 bg-secondary text-gray-800 rounded-r-md hover:bg-secondary/80 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-gray-800">10,000+</p>
              <p className="mt-2 text-gray-600">Active Students</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-gray-800">50+</p>
              <p className="mt-2 text-gray-600">Subjects</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-gray-800">5,000+</p>
              <p className="mt-2 text-gray-600">Successful Matches</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Partners Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Study Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PARTNERS.map((partner) => (
              <StudyPartnerCard key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-soft text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Find Your Study Partner?</h2>
          <p className="mt-4 text-xl">
            Join thousands of students who have found their perfect study match
          </p>
          <Link
            to="/register"
            className="mt-8 inline-block px-8 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/80 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}