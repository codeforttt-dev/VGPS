import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../component/admin/AdminLayout';
import SEO from '../../component/layout/SEO';

const AdminDashboard = () => {
  const [admissions, setAdmissions] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://api.valleygreenpublicschool.com/api');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [admRes, inqRes] = await Promise.all([
        fetch(`${API_URL}/admissions`),
        fetch(`${API_URL}/inquiries`)
      ]);

      const admData = await admRes.json();
      const inqData = await inqRes.json();

      if (admData.success) setAdmissions(admData.data || []);
      if (inqData.success) setInquiries(inqData.data || []);
    } catch (error) {
      console.error('Error fetching dashboard metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  const pendingAdmissions = admissions.filter(a => a.status === 'Pending').length;
  const newInquiries = inquiries.filter(i => i.status === 'New').length;

  return (
    <AdminLayout>
      <SEO title="Admin Dashboard | Valley Green Public School" />

      {/* Hero Welcome Banner */}
      <div className="bg-primary text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-lg relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block bg-white/15 px-3.5 py-1 rounded-full text-accent font-extrabold text-xs uppercase tracking-widest mb-3 backdrop-blur-sm">
            School Administration Control Center
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
            Welcome Back, <span className="text-accent">Administrator</span>
          </h2>
          <p className="text-gray-200 text-xs sm:text-sm font-medium leading-relaxed">
            Manage student online admission applications and parent inquiries seamlessly in real-time.
          </p>
        </div>

        <button 
          onClick={fetchDashboardData}
          className="relative z-10 bg-accent hover:bg-emerald-600 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all hover:scale-105 flex items-center gap-2 cursor-pointer shrink-0"
        >
          <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh Data
        </button>
      </div>

      {/* Analytics Counter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        {/* Total Admissions Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total Admissions</p>
            <h3 className="text-3xl font-black text-gray-900">{admissions.length}</h3>
            <span className="text-emerald-600 text-[11px] font-bold mt-1 inline-block">Applications Received</span>
          </div>
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>

        {/* Pending Admissions Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Pending Action</p>
            <h3 className="text-3xl font-black text-amber-500">{pendingAdmissions}</h3>
            <span className="text-amber-600 text-[11px] font-bold mt-1 inline-block">Requires Review</span>
          </div>
          <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Total Inquiries Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total Inquiries</p>
            <h3 className="text-3xl font-black text-gray-900">{inquiries.length}</h3>
            <span className="text-emerald-600 text-[11px] font-bold mt-1 inline-block">Parent Messages</span>
          </div>
          <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </div>

        {/* New Inquiries Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">New Messages</p>
            <h3 className="text-3xl font-black text-blue-600">{newInquiries}</h3>
            <span className="text-blue-600 text-[11px] font-bold mt-1 inline-block">Unread / New</span>
          </div>
          <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

      </div>

      {/* Two Grid Preview Section: Recent Admissions & Recent Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Admissions Widget */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-black text-gray-900 uppercase">Recent Admissions</h3>
              <p className="text-xs text-gray-500 font-medium">Latest student applications</p>
            </div>
            <Link to="/admin/admissions" className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 transition-colors uppercase">
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {loading ? (
            <div className="py-8 text-center text-gray-400 font-medium text-sm">Loading applications...</div>
          ) : admissions.length === 0 ? (
            <div className="py-8 text-center text-gray-400 font-medium text-sm">No admission applications submitted yet.</div>
          ) : (
            <div className="space-y-3">
              {admissions.slice(0, 5).map((adm) => (
                <div key={adm._id} className="p-3.5 rounded-xl bg-[#f8fcf9] border border-gray-100 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-gray-900">{adm.studentName}</span>
                    <span className="text-xs text-gray-500 font-medium">Class: <strong className="text-primary">{adm.studentClass}</strong> • {adm.mobile}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    adm.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                    adm.status === 'Contacted' ? 'bg-blue-100 text-blue-700' :
                    adm.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {adm.status || 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Inquiries Widget */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-black text-gray-900 uppercase">Recent Inquiries</h3>
              <p className="text-xs text-gray-500 font-medium">Latest messages from parents</p>
            </div>
            <Link to="/admin/inquiries" className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 transition-colors uppercase">
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {loading ? (
            <div className="py-8 text-center text-gray-400 font-medium text-sm">Loading inquiries...</div>
          ) : inquiries.length === 0 ? (
            <div className="py-8 text-center text-gray-400 font-medium text-sm">No parent inquiries submitted yet.</div>
          ) : (
            <div className="space-y-3">
              {inquiries.slice(0, 5).map((inq) => (
                <div key={inq._id} className="p-3.5 rounded-xl bg-[#f8fcf9] border border-gray-100 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-gray-900">{inq.name}</span>
                    <span className="text-xs text-gray-500 font-medium truncate max-w-[200px]">For: <strong className="text-accent">{inq.inquiryFor}</strong> • {inq.mobile}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    inq.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                    inq.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {inq.status || 'New'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
