import React from "react";

const JobPreview = ({ job }) => {
  if (!job) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Job Preview</h2>
        <p className="text-gray-600">No job selected</p>
      </div>
    );
  }

  return (
    <div className="pt-0 bg-white sticky top-0">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Preview</h2>
      <div className="p-4 rounded-lg shadow-lg border border-gray-200">
        <div className="flex flex-wrap mb-4">
          <div className="w-full">
            {job.visibleFields.title && (
              <h3 className="text-3xl font-semibold text-indigo-600 mb-2">
                {job.title}
              </h3>
            )}
            <div className="flex items-center">
              {job.visibleFields.labels && (
                <div className="flex space-x-2 mb-4">
                  {job.labels.remote && (
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      Remote
                    </span>
                  )}
                  {job.labels.fiveDayWeek && (
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      5 Day Week
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {job.visibleFields.introduction && (
          <p className="text-gray-700 my-2">
            <strong className="text-gray-900">Introduction:</strong>{" "}
            {job.introduction}
          </p>
        )}
        {job.visibleFields.roles && (
          <p className="text-gray-700 my-4">
            <strong className="text-gray-900">Roles and Responsibilities:</strong>{" "}
            {job.roles}
          </p>
        )}
        {job.visibleFields.experience && (
          <p className="text-gray-700 my-4">
            <strong className="text-gray-900">Preferred Experience:</strong>{" "}
            {job.experienceMin} to {job.experienceMax} yrs
          </p>
        )}
        {job.visibleFields.qualifications && (
          <p className="text-gray-700 my-4">
            <strong className="text-gray-900">Qualifications:</strong>{" "}
            {job.qualifications}
          </p>
        )}
        {job.visibleFields.salary && (
          <p className="text-gray-700 my-4">
            <strong className="text-gray-900">Salary Range:</strong> {job.salary}
          </p>
        )}
        {job.visibleFields.callToAction && (
          <p className="text-gray-700 my-4">
            <strong className="text-gray-900">Concluding Statement:</strong>{" "}
            {job.callToAction}
          </p>
        )}
        {job.visibleFields.company && (
          <p className="text-gray-700 my-4">
            <strong className="text-gray-900">Company:</strong> {job.company}
          </p>
        )}
        {job.visibleFields.location && (
          <p className="text-gray-700 my-4">
            <strong className="text-gray-900">Location:</strong> {job.location}
          </p>
        )}
        {job.visibleFields.jobType && (
          <p className="text-gray-700">
            <strong className="text-gray-900">Job Type:</strong> {job.jobType}
          </p>
        )}
      </div>
    </div>
  );
};

export default JobPreview;
