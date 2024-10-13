import { handleGoogleSignIn } from "@/app/actions/auth.action";

export function GoogleButton() {
    return <button
    onClick={async () => handleGoogleSignIn()}
    className="bg-gray-200 shadow-sm flex-grow text-black font-semibold p-4 rounded-xl hover:bg-gray-100 flex items-center gap-2 justify-center"
  >
    <img src="google.svg" width="20px" alt="" />
    Sign In with google
  </button>;
}
