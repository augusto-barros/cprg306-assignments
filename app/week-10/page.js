"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function SignInPage() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        }
    };

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    console.dir(user);

return (
        <main className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <header className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Augusto&apos;s Shopping List</h1>
                </header>

                {user ? (
                    <div className="text-center space-y-5">
                        <p className="text-xl text-black">Welcome, {user.displayName}!</p>
                        <p className="text-black">Your e-mail is: {user.email}</p>
                        <div className="flex justify-center mt-4">
                            <img
                                src={user.photoURL}
                                alt={user.displayName}
                                className="w-20 h-20 rounded-full border-2 border-blue-500"
                            />
                        </div>
                        <button
                            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5">
                            <Link 
                            href=".\week-10\shopping-list">Go to Shopping List</Link>
                        </button>
                        <button
                            type="button"
                            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-black">Please sign in to continue.</p>
                        <button
                            type="button"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={handleSignIn}
                        >
                            Sign In with GitHub
                        </button>
                    </div>
                )}
            </div>
            <button 
                className="absolute top-5 left-5 px-4 py-2 text-white rounded hover:bg-blue-600"
                onClick={() => window.location.href = './'}>
                    Back to Home
            </button>
        </main>
    );
}