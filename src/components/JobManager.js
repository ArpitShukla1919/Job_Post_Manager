import React, { useState, useEffect } from 'react';
import JobList from './JobList';
import JobForm from './JobForm';
import JobPreview from './JobPreview';

const JobManager = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    if (jobs.length > 0 && !selectedJobId) {
      setSelectedJobId(jobs[0].id);
    }
  }, [jobs, selectedJobId]);

  useEffect(() => {
    addJob();
  }, []);

  const addJob = () => {
    const newJob = {
      id: Date.now(),
      title: '',
      introduction: '',
      roles: '',
      experienceMin: '',
      experienceMax: '',
      qualifications: '',
      salary: '',
      callToAction: '',
      company: '',
      location: '',
      jobType: 'Full Time',
      labels: {
        remote: false,
        fiveDayWeek: false,
      },
      visibleFields: {
        title: true,
        introduction: true,
        roles: true,
        experience: true,
        qualifications: true,
        salary: true,
        callToAction: true,
        company: true,
        location: true,
        jobType: true,
        labels: true,
      },
      active: false
    };
    setJobs([...jobs, newJob]);
    setSelectedJobId(newJob.id);
  };

  const duplicateJob = (id) => {
    const jobToDuplicate = jobs.find(job => job.id === id);
    const newJob = {
      ...jobToDuplicate,
      id: Date.now(),
      title: `${jobToDuplicate.title} (Copy)`,
    };
    setJobs([...jobs, newJob]);
    setSelectedJobId(newJob.id);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
    if (selectedJobId === id) setSelectedJobId(null);
  };

  const updateJob = (id, updatedJob) => {
    setJobs(jobs.map(job => job.id === id ? updatedJob : job));
  };

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full md:w-1/5 bg-gray-100 border-b md:border-r border-gray-200 shadow-lg overflow-y-auto">
        <JobList
          jobs={jobs}
          addJob={addJob}
          duplicateJob={duplicateJob}
          deleteJob={deleteJob}
          setSelectedJobId={setSelectedJobId}
          selectedJobId={selectedJobId}
        />
      </div>
      <div className="w-full md:w-3/5 bg-white border-b md:border-r border-gray-200 shadow-lg overflow-y-auto">
        {selectedJobId && (
          <JobForm
            job={jobs.find(job => job.id === selectedJobId)}
            updateJob={(updatedJob) => updateJob(selectedJobId, updatedJob)}
          />
        )}
      </div>
      <div className="w-full md:w-1/3 bg-white p-4">
        <JobPreview job={jobs.find(job => job.id === selectedJobId)} />
      </div>
    </div>
  );
};

export default JobManager;
