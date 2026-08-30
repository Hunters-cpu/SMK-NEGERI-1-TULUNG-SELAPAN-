// 🌐 Google Workspace Authentication & Token Service via Firebase Auth
import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  User, 
  signOut 
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App instance safely (singleton pattern)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Complete Google Workspace Scopes
export const WORKSPACE_SCOPES = [
  // Google Calendar
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events',
  'https://www.googleapis.com/auth/calendar.readonly',
  // Gmail
  'https://mail.google.com/',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.readonly',
  // Google Classroom
  'https://www.googleapis.com/auth/classroom.courses',
  'https://www.googleapis.com/auth/classroom.courses.readonly',
  'https://www.googleapis.com/auth/classroom.coursework.me',
  'https://www.googleapis.com/auth/classroom.coursework.students',
  'https://www.googleapis.com/auth/classroom.announcements',
  'https://www.googleapis.com/auth/classroom.rosters',
  'https://www.googleapis.com/auth/classroom.profile.emails'
];

export const googleProvider = new GoogleAuthProvider();
WORKSPACE_SCOPES.forEach(scope => {
  googleProvider.addScope(scope);
});
googleProvider.setCustomParameters({
  prompt: 'consent',
  access_type: 'offline'
});

// Flag to indicate if we are in the middle of a sign-in flow
let isSigningIn = false;
// Cache the access token in memory (NEVER store in localStorage)
let cachedAccessToken: string | null = null;
let cachedGoogleUser: User | null = null;

// Initialize auth state listener
export const initGoogleAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    cachedGoogleUser = user;
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // Token might need re-acquisition if page refreshed
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

/**
 * Sign in with Google popup and obtain Workspace OAuth access token
 */
export const signInWithGoogle = async (): Promise<{ user: User; accessToken: string }> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    if (!credential?.accessToken) {
      throw new Error('Gagal mendapatkan Google Workspace Access Token dari Firebase Auth.');
    }

    cachedAccessToken = credential.accessToken;
    cachedGoogleUser = result.user;

    return { 
      user: result.user, 
      accessToken: cachedAccessToken 
    };
  } catch (error: any) {
    console.error('Google Workspace Sign In error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

/**
 * Get the currently cached in-memory access token
 */
export const getGoogleAccessToken = (): string | null => {
  return cachedAccessToken;
};

/**
 * Manually set or clear the in-memory access token
 */
export const setGoogleAccessToken = (token: string | null) => {
  cachedAccessToken = token;
};

/**
 * Get the current Firebase Google user
 */
export const getGoogleUser = (): User | null => {
  return cachedGoogleUser || auth.currentUser;
};

/**
 * Check if Google Workspace is currently connected with valid token
 */
export const isGoogleWorkspaceConnected = (): boolean => {
  return Boolean(cachedAccessToken && (cachedGoogleUser || auth.currentUser));
};

/**
 * Sign out from Google Workspace
 */
export const logoutGoogle = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (err) {
    console.warn('Error during Google signOut:', err);
  } finally {
    cachedAccessToken = null;
    cachedGoogleUser = null;
  }
};
