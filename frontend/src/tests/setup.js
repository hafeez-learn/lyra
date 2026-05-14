// Test setup file
import { expect } from 'vitest'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
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

// Supabase mock
export const mockSupabaseClient = {
  auth: {
    getUser: async () => ({ data: { user: null } }),
    signUp: async () => ({ data: null, error: null }),
    signInWithPassword: async () => ({ data: null, error: null }),
    signOut: async () => ({ error: null }),
    onAuthStateChange: () => ({ data: { unsubscribe: () => {} } }),
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        order: () => Promise.resolve({ data: [], error: null }),
      }),
    }),
    insert: () => Promise.resolve({ error: null }),
  }),
}