import React from 'react';
import { useUsers } from '../../hooks/useUsers';
import { MoreVertical, Edit, Trash, Check, X } from 'lucide-react';

export default function UsersList() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Une erreur est survenue lors du chargement des utilisateurs
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Utilisateurs</h1>
        <input
          type="search"
          placeholder="Rechercher..."
          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
        />
      </div>

      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Utilisateur</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Plan</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Minutes</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Statut</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {users?.map((user) => (
              <tr key={user.id} className="hover:bg-white/5">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {user.full_name?.charAt(0) || user.email.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-white">{user.full_name}</div>
                      <div className="text-sm text-gray-400">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {user.subscription?.plan_type || 'Aucun'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white">{user.credits?.available_minutes || 0}</div>
                  <div className="text-xs text-gray-400">Disponibles</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    user.subscription?.status === 'active'
                      ? 'bg-green-500/10 text-green-500'
                      : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {user.subscription?.status === 'active' ? 'Actif' : 'Inactif'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}