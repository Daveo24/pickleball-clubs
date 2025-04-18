'use client';

import { useSession, signOut } from 'next-auth/react';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Dashboard
          </h2>
          {session?.user && (
            <div className="mt-4 text-center">
              <p>Welcome, {session.user.name}!</p>
              <p>Email: {session.user.email}</p>
            </div>
          )}
        </div>
        <button
          onClick={() => signOut()}
          className="group relative flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Sign out
        </button>
      </div>
    </div>
  );
} 