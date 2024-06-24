import { ClipboardDocumentListIcon, TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';

const JobItem = ({ job, duplicateJob, deleteJob, setSelectedJobId, isSelected }) => {
  return (
    <ol className={`border-b p-2 flex justify-between items-center ${isSelected ? 'bg-gray-200' : ''}`}>
      <span 
        onClick={() => setSelectedJobId(job.id)} 
        className="cursor-pointer text-blue-600 hover:underline"
      >
        {job.title || 'Untitled Job'}
      </span>
      <div className="flex space-x-2">
        <button 
          className="bg-green-500 text-white px-2 py-1 rounded flex items-center justify-center" 
          onClick={() => duplicateJob(job.id)}
        >
          <ClipboardDocumentListIcon className='h-5 w-5'/>
        </button>
        <button 
          className="bg-red-500 text-white px-2 py-1 rounded flex items-center justify-center" 
          onClick={() => deleteJob(job.id)}
        >
          <TrashIcon className='h-5 w-5'/>
        </button>
      </div>
    </ol>
  );
};

export default JobItem;
