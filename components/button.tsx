import { signIn } from "next-auth/react";

export function GoogleButton() {
    return <button
    onClick={async () => {
      await signIn("google");
    }}
    className="bg-gray-200 shadow-sm flex-grow text-black font-semibold p-4 rounded-xl hover:bg-gray-100 flex items-center gap-2 justify-center"
  >
    <img src="google.svg" width="20px" alt="" />
    Sign In with google
  </button>;
}
export function GithubButton() {
    return <button
    onClick={async () => {
      await signIn("github");
    }}
    className="bg-gray-900 shadow-sm flex-grow text-white font-semibold p-4 rounded-xl hover:bg-gray-800 flex items-center gap-2 justify-center"
  >
    <img src="github.svg" width="30px" alt="" />
    Sign In with Github
  </button>;
}