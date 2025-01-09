import React from 'react';

interface AuthButtonProps {
  type: 'submit' | 'button';
  loading: boolean;
  disabled?: boolean;
  loadingText: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function AuthButton({
  type,
  loading,
  disabled,
  loadingText,
  children,
  onClick
}: AuthButtonProps) {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
    >
      {loading ? loadingText : children}
    </button>
  );
}