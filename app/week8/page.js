"use client";

import { useUserAuth } from "./_utils/auth-context";
import logo from "../../assets/images/logo2.jpg";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    if (!user) {
        return (
            <main className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white w-96 p-6 rounded shadow-sm">
                    <div className="flex items-center justify-center mb-4">
                        <img src={logo} alt="Logo" className="h-32"/>
                    </div>
                    <label className="text-gray-700">Email</label>
                    <input 
                        className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4" 
                        type="email"
                    />
                    <label className="text-gray-700">Password</label>
                    <input 
                        className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4" 
                        type="password"
                    />
                    <input
                        className="mb-4"
                        type="checkbox"
                    />
                    <label className="text-gray-700">Remember Me</label>
                    <button type="submit" className="bg-blue-500 w-full text-gray-100 py-2 rounded mb-6 hover:bg-blue-600 transition-colors">Sign In</button>
                    <label className="text-gray-700">Sign in with a partner</label>
                    <button onClick={gitHubSignIn} className="bg-gray-500 w-full text-gray-100 py-2 rounded hover:bg-gray-600 transition-colors">GitHub</button>
                </div>
            </main>
        );
    }
    
    return (
        <main className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white w-96 p-6 rounded shadow-sm">
                <div className="flex items-center justify-center mb-10 flex-col">
                    <img src={logo} alt="Logo" className="h-32"/>
                    <h3 className="text-gray-700 text-lg font-bold">Successfully Authenticated</h3>
                    <p className="text-gray-700">Welcome to the app, {user.displayName}</p>
                </div>
                <label className="text-gray-700">Where would you like to go?</label>
                <br/>
                <button className="bg-blue-500 w-full text-gray-100 py-2 rounded mb-6 mt-4 hover:bg-blue-600 transition-colors">
                    <Link href="/week8/shopping-list" className="text-gray-100">Shopping List</Link>
                </button>
                <button onClick={firebaseSignOut} className="bg-gray-500 w-full text-gray-100 py-2 rounded hover:bg-gray-600 transition-colors">Sign Out</button>
            </div>
        </main>
    );
}
