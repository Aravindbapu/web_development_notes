"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-purple-700">NextAuth Demo</h1>
        {session ? (
          <>
            <div className="mb-4 text-lg text-gray-700">
              Signed in as <span className="font-semibold">{session.user.email}</span>
            </div>
            <button
              onClick={() => signOut()}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition mb-2"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <div className="mb-4 text-lg text-gray-700">Not signed in</div>
            <button
              onClick={() => signIn()}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
