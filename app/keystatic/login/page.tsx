'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function KeystaticLogin() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const form = e.currentTarget;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    const res = await fetch('/api/keystatic-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/keystatic');
    } else {
      const data = await res.json();
      setError(data.error ?? 'Login failed');
      setLoading(false);
    }
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#0f0f0f',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{
        background: '#1a1a1a',
        border: '1px solid #2a2a2a',
        borderRadius: 12,
        padding: '40px 48px',
        width: 360,
      }}>
        <h1 style={{ color: '#fff', fontSize: 20, fontWeight: 600, marginBottom: 8, textAlign: 'center' }}>
          Tokyo Club CMS
        </h1>
        <p style={{ color: '#888', fontSize: 14, textAlign: 'center', marginBottom: 32 }}>
          Sign in to manage content
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', color: '#ccc', fontSize: 13, marginBottom: 6 }}>
            Username
          </label>
          <input
            name="username"
            type="text"
            required
            autoComplete="username"
            style={{
              width: '100%',
              background: '#111',
              border: '1px solid #333',
              borderRadius: 6,
              color: '#fff',
              fontSize: 14,
              padding: '10px 12px',
              marginBottom: 16,
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />

          <label style={{ display: 'block', color: '#ccc', fontSize: 13, marginBottom: 6 }}>
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            style={{
              width: '100%',
              background: '#111',
              border: '1px solid #333',
              borderRadius: 6,
              color: '#fff',
              fontSize: 14,
              padding: '10px 12px',
              marginBottom: 24,
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />

          {error && (
            <p style={{ color: '#f87171', fontSize: 13, marginBottom: 16, textAlign: 'center' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? '#444' : '#fff',
              color: '#000',
              border: 'none',
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              padding: '11px 0',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
