"use client";

import { useActionState } from "react";

import { login, type LoginState } from "../actions";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="username" className="text-sm text-white/70">
          Username
        </label>
        <input
          id="username"
          name="username"
          autoComplete="username"
          required
          className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#ad6d25]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm text-white/70">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#ad6d25]"
        />
      </div>

      {state.error && <p className="text-sm text-[#ff6b6b]">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-md bg-[#ad6d25] px-4 py-2 font-medium text-white transition hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
