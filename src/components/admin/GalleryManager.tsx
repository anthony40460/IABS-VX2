import React, { useState } from 'react';
import { Plus, Image, Video, Layout, Trash, Edit } from 'lucide-react';

interface GalleryItem {
  id: string;
  type: 'image' | 'video' | 'app';
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
}

export default function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Gestionnaire de Galerie</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center px-4 py-2 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Ajouter un élément
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="aspect-video">
              <img
                src={item.thumbnail || item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex space-x-2">
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <Edit className="h-4 w-4 text-white" />
                </button>
                <button className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors">
                  <Trash className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-black border border-white/10 rounded-xl p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold text-white mb-6">Ajouter un élément</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Type</label>
                <select className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white">
                  <option value="image">Image</option>
                  <option value="video">Vidéo</option>
                  <option value="app">Application</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Titre</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                <textarea className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">URL</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}