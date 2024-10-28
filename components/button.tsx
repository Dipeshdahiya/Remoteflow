import { signIn } from "next-auth/react";

export function GoogleButton() {
    return<img src="/assets/google-icon.png" className="w-16 h-16 cursor-pointer hover:"
      onClick={async () => {
      await signIn("google");
    }}
    >
    </img>


}
export function GithubButton() {
    return<img src="/assets/github-icon.png" className="w-16 h-16 cursor-pointer"
    onClick={async () => {
    await signIn("github");
  }}
  >
  </img>
    
}