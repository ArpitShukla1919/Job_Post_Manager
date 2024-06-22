import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs, addJob, duplicateJob, deleteJob, setSelectedJobId, selectedJobId }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Job List</h2>
      <button className="w-full bg-blue-600 text-white py-2 mb-4 rounded" onClick={addJob}>New Job +</button>
      <ul className="space-y-2">
        {jobs?.map(job => (
          <JobItem
            key={job.id}
            job={job}
            duplicateJob={duplicateJob}
            deleteJob={deleteJob}
            setSelectedJobId={setSelectedJobId}
            isSelected={job.id === selectedJobId}
          />
        ))}
      </ul>
    </div>
  );
};

export default JobList;
