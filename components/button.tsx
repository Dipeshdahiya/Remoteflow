import { signIn } from "next-auth/react";

export function GoogleButton() {
    return<img src="/assets/G.png" className="w-14 h-14 cursor-pointer hover:"
      onClick={async () => {
      await signIn("google");
    }}
    >
    </img>


}
export function GithubButton() {
    return<img src="/assets/github-icon.png" className="w-14 h-14 cursor-pointer"
    onClick={async () => {
    await signIn("github");
  }}
  >
  </img>
    
}