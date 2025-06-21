import React from 'react';
import AllJobs from './AllJobs';
import AddJob from './AddJob';
import DashboardStats from './DashboardStats';
import { Outlet, useLocation } from 'react-router-dom';

function DashboardContent({ jobs, setJobs }) {
  const location = useLocation();

  // Render AddJob and pass setJobs for /dashboard/add-job
  if (location.pathname === '/dashboard/add-job') {
    return <AddJob setJobs={setJobs} jobs={jobs} />;
  }
  // Render AllJobs and pass jobs for /dashboard/jobs
  if (location.pathname === '/dashboard/jobs') {
    return <AllJobs jobs={jobs} />;
  }
  // Show dashboard summary for /dashboard
  if (location.pathname === '/dashboard') {
    return <DashboardStats jobs={jobs} />;
  }
  // Default: render nested routes
  return <Outlet />;
}

export default DashboardContent;
