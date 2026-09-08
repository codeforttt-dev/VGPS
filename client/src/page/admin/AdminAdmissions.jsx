import React, { useEffect, useState } from 'react';
import AdminLayout from '../../component/admin/AdminLayout';
import SEO from '../../component/layout/SEO';

const AdminAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('All');
  
  // Modal states
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://api.valleygreenpublicschool.com/api');

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/admissions`);
      const result = await res.json();
      if (result.success) {
        setAdmissions(result.data || []);
      }
    } catch (error) {
      console.error('Error fetching admissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_URL}/admission/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const result = await res.json();
      if (result.success) {
        setAdmissions(prev => prev.map(item => item._id === id ? { ...item, status: newStatus } : item));
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(`${API_URL}/admission/${deleteTarget._id}`, {
        method: 'DELETE'
      });
      const result = await res.json();
      if (result.success) {
        setAdmissions(prev => prev.filter(item => item._id !== deleteTarget._id));
        setDeleteTarget(null);
      }
    } catch (error) {
      console.error('Error deleting admission:', error);
      alert('Failed to delete admission record');
    }
  };

  // Filtered Admissions
  const filteredAdmissions = admissions.filter(item => {
    const matchesSearch = 
      item.studentName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fatherName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mobile?.includes(searchQuery);

    const matchesClass = classFilter === 'All' || item.studentClass === classFilter;

    return matchesSearch && matchesClass;
  });

  return (
    <AdminLayout>
      <SEO title="Online Admissions | Admin Portal VGPS" />

      {/* Header Controls: Search & Filter */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-auto flex-1 max-w-md relative">
          <input 
            type="text" 
            placeholder="Search by student, father name, or mobile..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-2.5 pl-10 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <label className="text-xs font-bold text-gray-600 uppercase">Class Filter:</label>
          <select 
            value={classFilter} 
            onChange={(e) => setClassFilter(e.target.value)}
            className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none cursor-pointer"
          >
            <option value="All">All Classes</option>
            <option value="Nursery">Nursery</option>
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            <option value="Class 3">Class 3</option>
            <option value="Class 4">Class 4</option>
            <option value="Class 5">Class 5</option>
          </select>
        </div>
      </div>

      {/* Main Data Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-black text-gray-900 uppercase">
            Admissions List <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full ml-2">Total: {filteredAdmissions.length}</span>
          </h2>
          <button 
            onClick={fetchAdmissions}
            className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 transition-colors uppercase cursor-pointer"
          >
            <svg className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="p-12 text-center text-gray-400 font-medium">Loading admission records...</div>
        ) : filteredAdmissions.length === 0 ? (
          <div className="p-12 text-center text-gray-400 font-medium">No admission records found matching criteria.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fcf9] text-gray-700 border-b border-gray-100">
                  <th className="py-3.5 px-4 font-extrabold text-xs uppercase tracking-wider">Student Name</th>
                  <th className="py-3.5 px-4 font-extrabold text-xs uppercase tracking-wider">Class</th>
                  <th className="py-3.5 px-4 font-extrabold text-xs uppercase tracking-wider">Father's Name</th>
                  <th className="py-3.5 px-4 font-extrabold text-xs uppercase tracking-wider">Mobile</th>
                  <th className="py-3.5 px-4 font-extrabold text-xs uppercase tracking-wider">Submitted On</th>
                  <th className="py-3.5 px-4 font-extrabold text-xs uppercase tracking-wider">Status</th>
                  <th className="py-3.5 px-4 font-extrabold text-xs uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {filteredAdmissions.map((item) => (
                  <tr key={item._id} className="hover:bg-[#f8fcf9]/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-gray-900">{item.studentName}</td>
                    <td className="py-4 px-4 font-bold text-primary">{item.studentClass}</td>
                    <td className="py-4 px-4 font-medium text-gray-700">{item.fatherName}</td>
                    <td className="py-4 px-4 font-medium text-gray-700">{item.mobile}</td>
                    <td className="py-4 px-4 font-medium text-gray-500 text-xs">
                      {new Date(item.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="py-4 px-4">
                      <select 
                        value={item.status || 'Pending'}
                        onChange={(e) => handleStatusChange(item._id, e.target.value)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border cursor-pointer focus:outline-none ${
                          item.status === 'Confirmed' ? 'bg-green-50 text-green-700 border-green-200' :
                          item.status === 'Contacted' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                          item.status === 'Rejected' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => setSelectedAdmission(item)}
                          className="px-3 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
                        >
                          Details
                        </button>
                        <button 
                          onClick={() => setDeleteTarget(item)}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Delete Record"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail View Modal */}
      {selectedAdmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-fade-in-up">
            <button 
              onClick={() => setSelectedAdmission(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>
            
            <h3 className="text-xl font-black text-gray-900 uppercase mb-4 pb-2 border-b border-gray-100">
              Admission Application Details
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between bg-[#f8fcf9] p-3 rounded-xl">
                <span className="font-bold text-gray-500">Student Name:</span>
                <span className="font-black text-gray-900">{selectedAdmission.studentName}</span>
              </div>
              <div className="flex justify-between bg-[#f8fcf9] p-3 rounded-xl">
                <span className="font-bold text-gray-500">Class Requested:</span>
                <span className="font-black text-primary">{selectedAdmission.studentClass}</span>
              </div>
              <div className="flex justify-between bg-[#f8fcf9] p-3 rounded-xl">
                <span className="font-bold text-gray-500">Date of Birth:</span>
                <span className="font-bold text-gray-800">{selectedAdmission.dob ? new Date(selectedAdmission.dob).toLocaleDateString('en-IN') : 'N/A'}</span>
              </div>
              <div className="flex justify-between bg-[#f8fcf9] p-3 rounded-xl">
                <span className="font-bold text-gray-500">Father's Name:</span>
                <span className="font-bold text-gray-800">{selectedAdmission.fatherName}</span>
              </div>
              <div className="flex justify-between bg-[#f8fcf9] p-3 rounded-xl">
                <span className="font-bold text-gray-500">Mother's Name:</span>
                <span className="font-bold text-gray-800">{selectedAdmission.motherName}</span>
              </div>
              <div className="flex justify-between bg-[#f8fcf9] p-3 rounded-xl">
                <span className="font-bold text-gray-500">Primary Mobile:</span>
                <span className="font-bold text-gray-800">{selectedAdmission.mobile}</span>
              </div>
              <div className="flex justify-between bg-[#f8fcf9] p-3 rounded-xl">
                <span className="font-bold text-gray-500">WhatsApp / Secondary:</span>
                <span className="font-bold text-gray-800">{selectedAdmission.secondaryMobile || 'N/A'}</span>
              </div>
              <div className="flex flex-col bg-[#f8fcf9] p-3 rounded-xl">
                <span className="font-bold text-gray-500 mb-1">Address / Location:</span>
                <span className="font-bold text-gray-800">{selectedAdmission.location}</span>
              </div>
            </div>

            <button 
              onClick={() => setSelectedAdmission(null)}
              className="w-full mt-6 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl text-center">
            <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-2">Delete Admission Record?</h3>
            <p className="text-xs text-gray-500 mb-6">Are you sure you want to delete application for <strong>{deleteTarget.studentName}</strong>? This action cannot be undone.</p>
            <div className="flex gap-3">
              <button 
                onClick={() => setDeleteTarget(null)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
};

export default AdminAdmissions;
