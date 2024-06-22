import React from "react";
import citiesData from './Cities.json'

const JobForm = ({ job, updateJob }) => {
  const handleChange = (field, value) => {
    if (field === "experienceMin") {
      const min = parseInt(value, 10);
      const max = parseInt(job.experienceMax, 10);
      if (!isNaN(min) && !isNaN(max) && min >= max) {
        updateJob({
          ...job,
          experienceMin: max - 1,
          [field]: max - 1,
        });
      } else {
        updateJob({ ...job, [field]: min });
      }
    } else if (field === "experienceMax") {
      const min = parseInt(job.experienceMin, 10);
      const max = parseInt(value, 10);
      if (!isNaN(min) && !isNaN(max) && max <= min) {
        updateJob({
          ...job,
          experienceMax: min + 1,
          [field]: min + 1,
        });
      } else {
        updateJob({ ...job, [field]: max });
      }
    } else if (field === "labels") {
      updateJob({ ...job, labels: value });
    } else {
      updateJob({ ...job, [field]: value });
    }
  };

  const handleCheckboxChange = (field) => {
    updateJob({
      ...job,
      visibleFields: {
        ...job.visibleFields,
        [field]: !job.visibleFields[field],
      },
    });
  };

  const handleToggleActive = () => {
    updateJob({
      ...job,
      active: !job.active,
    });
  };

  return (
    <div className="w-full relative">
      <div className="sticky top-0 px-6 py-3 bg-white shadow-md z-10">
        <div>
          <h1 className="text-2xl font-semibold">Job Details</h1>
          <div className="flex items-center justify-end mt-4">
            <span className="mr-4">Job Active</span>
            <div className="relative">
              <input
                id="toggleActive"
                type="checkbox"
                checked={job.active}
                onChange={handleToggleActive}
                className="sr-only"
              />
              <label
                htmlFor="toggleActive"
                className={`toggle-label relative block w-12 h-6 rounded-full bg-gray-300 cursor-pointer transition-all duration-300 ${
                  job.active ? "bg-green-600" : ""
                }`}
              >
                <span
                  className={`block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
                    job.active ? "translate-x-full" : ""
                  }`}
                ></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 pt-6 px-4 pb-6">
        <div className="mb-4">
          <div className="flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.title}
              onChange={() => handleCheckboxChange("title")}
            />
            <label className="block text-gray-700 font-semibold">
              Job Title
            </label>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter job title"
              value={job.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.introduction}
              onChange={() => handleCheckboxChange("introduction")}
            />
            <h3 className="block text-gray-700 font-semibold">Introduction</h3>
          </div>
          <div className="accordion-content">
            <textarea
              placeholder="Enter job introduction"
              value={job.introduction}
              onChange={(e) => handleChange("introduction", e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.roles}
              onChange={() => handleCheckboxChange("roles")}
            />
            <h3 className="block text-gray-700 font-semibold">
              Roles & Responsibilities
            </h3>
          </div>
          <div className="accordion-content">
            <textarea
              placeholder="Enter roles and responsibilities"
              value={job.roles}
              onChange={(e) => handleChange("roles", e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.experience}
              onChange={() => handleCheckboxChange("experience")}
            />
            <h3 className="block text-gray-700 font-semibold">
              Experience Range (yrs)
            </h3>
          </div>
          <div className="accordion-content">
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={job.experienceMin}
                onChange={(e) => handleChange("experienceMin", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="number"
                placeholder="Max"
                value={job.experienceMax}
                onChange={(e) => handleChange("experienceMax", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.qualifications}
              onChange={() => handleCheckboxChange("qualifications")}
            />
            <h3 className="block text-gray-700 font-semibold">
              Qualifications
            </h3>
          </div>
          <div className="accordion-content">
            <input
              type="text"
              placeholder="Enter qualifications"
              value={job.qualifications}
              onChange={(e) => handleChange("qualifications", e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.salary}
              onChange={() => handleCheckboxChange("salary")}
            />
            <h3 className="block text-gray-700 font-semibold">Salary Range</h3>
          </div>
          <div className="accordion-content">
            <input
              type="text"
              placeholder="Enter salary range"
              value={job.salary}
              onChange={(e) => handleChange("salary", e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.callToAction}
              onChange={() => handleCheckboxChange("callToAction")}
            />
            <h3 className="block text-gray-700 font-semibold">
              Call To Action Concluding Statement
            </h3>
          </div>
          <div className="accordion-content">
            <textarea
              placeholder="Enter concluding statement"
              value={job.callToAction}
              onChange={(e) => handleChange("callToAction", e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.company}
              onChange={() => handleCheckboxChange("company")}
            />
            <h3 className="block text-gray-700 font-semibold">Company</h3>
          </div>
          <div className="accordion-content">
            <input
              type="text"
              placeholder="Enter company name"
              value={job.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.location}
              onChange={() => handleCheckboxChange("location")}
            />
            <h3 className="block text-gray-700 font-semibold">Job Location</h3>
          </div>
          <div className="accordion-content">
            <select
              value={job.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Select a city</option>
              {citiesData.map((city, index) => (
                <option key={index} value={city.city}>
                  {city.city}, {city.state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.jobType}
              onChange={() => handleCheckboxChange("jobType")}
            />
            <h3 className="block text-gray-700 font-semibold">Job Type</h3>
          </div>
          <div className="accordion-content">
            <select
              value={job.jobType}
              onChange={(e) => handleChange("jobType", e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header flex items-center pb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={job.visibleFields.labels}
              onChange={() => handleCheckboxChange("labels")}
            />
            <h3 className="block text-gray-700 font-semibold">Labels</h3>
          </div>
          <div className="accordion-content">
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={job.labels.remote}
                  onChange={() =>
                    handleChange("labels", {
                      ...job.labels,
                      remote: !job.labels.remote,
                    })
                  }
                  className="mr-2"
                />
                Is Remote
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={job.labels.fiveDayWeek}
                  onChange={() =>
                    handleChange("labels", {
                      ...job.labels,
                      fiveDayWeek: !job.labels.fiveDayWeek,
                    })
                  }
                  className="mr-2"
                />
                5 Day Week
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
