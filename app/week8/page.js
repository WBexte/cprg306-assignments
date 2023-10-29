"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    if (!user) {
        return (
            <main>
                <h1>Week 8</h1>
                <p>
                    This week we will be adding authentication to our shopping list app.
                </p>
                <p>
                    <button onClick={gitHubSignIn}>Sign in with GitHub</button>
                </p>
            </main>
        );
    }
    
    return (
        <main>
            <h1>Week 8</h1>
            <p>
                <button onClick={firebaseSignOut}>Sign out</button>
            </p>
            <p>
                <code>Welcome to the app, {user.displayName}</code>
            </p>
        </main>
    );
}
