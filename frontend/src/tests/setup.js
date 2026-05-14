// Test setup file
import { expect, vi } from 'vitest'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  root() {}
  rootMargin() {}
  thresholds() {}
  takeRecords() { return [] }
  inlineFlags() { return {} }
}

// Mock Firebase
export const mockFirebaseClient = {
  auth: {
    currentUser: null,
    signInWithEmailAndPassword: async () => ({ user: null, error: null }),
    createUserWithEmailAndPassword: async () => ({ user: null, error: null }),
    signOut: async () => ({ error: null }),
    onAuthStateChanged: (callback) => {
      callback(null)
      return { unsubscribe: () => {} }
    },
  },
  firestore: () => ({
    collection: () => ({
      add: async () => ({ id: 'mock-id' }),
      where: () => ({
        orderBy: () => ({
          limit: () => Promise.resolve({ docs: [] }),
        }),
      }),
    }),
  }),
}