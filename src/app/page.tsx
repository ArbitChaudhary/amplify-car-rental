"use client";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Home() {
  const { signOut } = useAuthenticator();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
