import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Users, Clock, Image, BarChart } from 'lucide-react';
import AdminNav from './AdminNav';
import UsersList from './UsersList';
import UsageStats from './UsageStats';
import GalleryManager from './GalleryManager';
import AdminOverview from './AdminOverview';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black">
      <AdminNav />
      <div className="container px-4 py-8">
        <Routes>
          <Route index element={<AdminOverview />} />
          <Route path="users" element={<UsersList />} />
          <Route path="usage" element={<UsageStats />} />
          <Route path="gallery" element={<GalleryManager />} />
        </Routes>
      </div>
    </div>
  );
}