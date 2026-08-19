import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Trash2, LogOut, RefreshCcw, Loader2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { supabase } from '@/lib/supabase';
import { company } from '@/data/site';

const AdminPage = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [inquiries, setInquiries] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchInquiries();
    }
  }, [session, startDate, endDate]);

  const fetchInquiries = async () => {
    setFetchingData(true);
    let query = supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (startDate) {
      query = query.gte('created_at', `${startDate}T00:00:00.000Z`);
    }
    if (endDate) {
      query = query.lte('created_at', `${endDate}T23:59:59.999Z`);
    }

    const { data, error } = await query;
      
    if (error) {
      console.error('Error fetching inquiries:', error);
    } else {
      setInquiries(data || []);
    }
    setFetchingData(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setAuthError(error.message);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    
    const { error } = await supabase
      .from('inquiries')
      .delete()
      .eq('id', id);
      
    if (error) {
      alert('Error deleting: ' + error.message);
    } else {
      setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
      fetchInquiries();
    }
  };

  const deleteSelectedInquiries = async () => {
    if (selectedIds.length === 0) return;
    if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} selected leads?`)) return;

    const { error } = await supabase
      .from('inquiries')
      .delete()
      .in('id', selectedIds);

    if (error) {
      alert('Error deleting: ' + error.message);
    } else {
      setSelectedIds([]);
      fetchInquiries();
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(inquiries.map(i => i.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (e, id) => {
    if (e.target.checked) {
      setSelectedIds(prev => [...prev, id]);
    } else {
      setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
    }
  };

  if (loading && !session) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
        </div>
      </Layout>
    );
  }

  if (!session) {
    return (
      <Layout>
        <Helmet>
          <title>Admin Login | {company.name}</title>
        </Helmet>
        <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
          <div className="w-full max-w-md rounded-md border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="mb-6 text-center font-display text-2xl font-bold text-brand-blue">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-brand-blue">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-brand-blue">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>
              {authError && <p className="text-xs text-brand-red">{authError}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-sm bg-brand-red py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Admin Dashboard | {company.name}</title>
      </Helmet>
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="flex items-center gap-3 font-display text-3xl font-bold text-brand-blue">
                Lead Dashboard
                <span className="rounded-full bg-brand-red px-3 py-1 text-sm font-bold tracking-wide text-white">
                  {inquiries.length} Leads
                </span>
              </h1>
              <p className="mt-1 text-sm text-slate-500">Manage your customer inquiries</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {selectedIds.length > 0 && (
              <button
                onClick={deleteSelectedInquiries}
                className="inline-flex items-center gap-2 rounded-sm bg-brand-red px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4" /> Delete ({selectedIds.length})
              </button>
            )}
            <div className="flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-2 py-1.5">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Filter:</span>
              <input 
                type="date" 
                value={startDate} 
                onChange={e => setStartDate(e.target.value)}
                className="bg-transparent px-1 text-sm text-slate-700 outline-none"
              />
              <span className="text-slate-400 text-sm">to</span>
              <input 
                type="date" 
                value={endDate} 
                onChange={e => setEndDate(e.target.value)}
                className="bg-transparent px-1 text-sm text-slate-700 outline-none"
              />
              {(startDate || endDate) && (
                <button 
                  onClick={() => { setStartDate(''); setEndDate(''); }}
                  className="ml-1 text-xs font-semibold text-brand-red hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <button
              onClick={fetchInquiries}
              className="inline-flex items-center gap-2 rounded-sm border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <RefreshCcw className={`h-4 w-4 ${fetchingData ? 'animate-spin' : ''}`} /> Refresh
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-sm bg-slate-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-700"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                      checked={inquiries.length > 0 && selectedIds.length === inquiries.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Customer</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Machine/Category</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Location</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {inquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-sm text-slate-500">
                      No inquiries found. When customers submit forms, they will appear here.
                    </td>
                  </tr>
                ) : (
                  inquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-slate-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <input 
                          type="checkbox" 
                          className="rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                          checked={selectedIds.includes(inquiry.id)}
                          onChange={(e) => handleSelectOne(e, inquiry.id)}
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                        {new Date(inquiry.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-brand-blue">{inquiry.name}</div>
                        <div className="text-sm text-slate-500">{inquiry.phone}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-800">
                        <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          {inquiry.product || 'Not specified'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {inquiry.city ? `${inquiry.city}, ${inquiry.state}` : 'N/A'}
                        {inquiry.zipcode && <span className="block text-xs text-slate-400">{inquiry.zipcode}</span>}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          inquiry.source === 'success' ? 'bg-green-100 text-green-800' : 
                          inquiry.source === 'failed' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {inquiry.source === 'success' ? 'Success' : 
                           inquiry.source === 'failed' ? 'Failed' : 
                           'Pending'}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <button
                          onClick={() => deleteInquiry(inquiry.id)}
                          className="text-brand-red hover:text-red-800 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
