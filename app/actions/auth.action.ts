"use server"
import { signIn, signOut } from '@/auth';

export const signin = async ({ email, password }: { email: string, password: string }) => {
  try {

    const response = await signIn("credentials", {
      redirectTo: "/workspace",
      email,
      password,
    });

    return { success: true };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const signUp = async ({ name, email, password }: { name: string, email: string, password: string }) => {
  try {
    const response = await signIn("credentials", {
      redirect: false,
      name,
      email,
      password,
    });

    return { success: true };
  } catch (error: any) {
    console.log(error, 'error from SignUp')
    const message = error.message.split('.')[0]
    return { error: message };
  }
};

export const handleGoogleSignIn = async () => {
  try {
    console.log('signing in with google');
    await signIn("google", { redirectTo: "/workspace" });
    console.log('signed in with google');
    
  } catch (error) {
    console.log(error,'error from handleGoogleSignIn')
    throw error;
  }
};

export const logout = async () => {

  try {
    console.log('Logging Out')
    await signOut({ redirectTo: '/sign-in' });
  } catch (error: any) {
    console.log(error, 'error logging out')
    throw error;
  } 
}
