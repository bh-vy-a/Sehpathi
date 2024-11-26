import { BookOpen, Clock, MapPin, MessageSquare } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface StudyPartnerCardProps {
  name: string;
  subjects: string[];
  location: string;
  availability: string;
  imageUrl: string;
}

export default function StudyPartnerCard({ name, subjects, location, availability, imageUrl }: StudyPartnerCardProps) {
  const handleConnect = () => {
    toast.success(`Connection request sent to ${name}!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        className="h-48 w-full object-cover"
        src={imageUrl}
        alt={`${name}'s profile`}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-center text-gray-600">
            <BookOpen className="h-5 w-5 mr-2" />
            <span>{subjects.join(", ")}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>{availability}</span>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={handleConnect}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Connect
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 hover:border-indigo-500 transition-colors">
            <MessageSquare className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}