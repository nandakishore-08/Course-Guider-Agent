import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Eye, EyeOff, Loader2, CheckIcon, XIcon } from 'lucide-react';

export function EnhancedSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Password strength checking logic
  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ]

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }))
  }

  const strength = checkStrength(password)

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length
  }, [strength])

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-gray-700"
    if (score <= 1) return "bg-red-500"
    if (score <= 2) return "bg-orange-500"
    if (score === 3) return "bg-amber-500"
    return "bg-emerald-500"
  }

  const getStrengthText = (score: number) => {
    if (score === 0) return "Enter a password"
    if (score <= 2) return "Weak password"
    if (score === 3) return "Medium password"
    return "Strong password"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Use the same validation as the strength indicator
    if (strengthScore < 4) {
      setError('Please meet all password requirements');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) {
        setError(error.message);
      } else {
        setSuccess('Account created successfully! Please check your email to verify your account.');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#181824] via-[#23243a] to-[#181824] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 sm:space-y-8 bg-[#23243a]/80 rounded-xl shadow-xl p-6 sm:p-8 border border-[#23243a]/40">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-900/30">
            <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-xs sm:text-sm text-green-200">
            Or{' '}
            <Link to="/login" className="font-medium text-green-400 hover:text-green-300">
              sign in to your existing account
            </Link>
          </p>
        </div>
        
        <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-100 mb-2">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-[#353657] bg-[#181824] placeholder:text-green-200/60 text-green-100 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field with Strength Indicator */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-green-100 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 pr-10 border border-[#353657] bg-[#181824] placeholder:text-green-200/60 text-green-100 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                placeholder="Create a password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-green-300" />
                ) : (
                  <Eye className="h-5 w-5 text-green-300" />
                )}
              </button>
            </div>

            {/* Password Strength Indicator */}
            {password && (
              <div className="mt-2 sm:mt-3">
                {/* Strength Progress Bar */}
                <div
                  className="bg-gray-700 h-1 w-full overflow-hidden rounded-full mb-3"
                  role="progressbar"
                  aria-valuenow={strengthScore}
                  aria-valuemin={0}
                  aria-valuemax={4}
                  aria-label="Password strength"
                >
                  <div
                    className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
                    style={{ width: `${(strengthScore / 4) * 100}%` }}
                  ></div>
                </div>

                {/* Strength Description */}
                <p className="text-green-100 mb-2 text-sm font-medium">
                  {getStrengthText(strengthScore)}. Must contain:
                </p>

                {/* Password Requirements List */}
                <ul className="space-y-1.5" aria-label="Password requirements">
                  {strength.map((req, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {req.met ? (
                        <CheckIcon
                          size={16}
                          className="text-emerald-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <XIcon
                          size={16}
                          className="text-green-300/50"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`text-xs ${req.met ? "text-emerald-300" : "text-green-300/70"}`}
                      >
                        {req.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-green-100 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 pr-10 border border-[#353657] bg-[#181824] placeholder:text-green-200/60 text-green-100 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-green-300" />
                ) : (
                  <Eye className="h-5 w-5 text-green-300" />
                )}
              </button>
            </div>
            
            {/* Password Match Indicator */}
            {confirmPassword && (
              <div className="mt-2 flex items-center gap-2">
                {password === confirmPassword ? (
                  <CheckIcon size={16} className="text-emerald-400" />
                ) : (
                  <XIcon size={16} className="text-red-400" />
                )}
                <span className={`text-xs ${password === confirmPassword ? "text-emerald-300" : "text-red-300"}`}>
                  {password === confirmPassword ? "Passwords match" : "Passwords do not match"}
                </span>
              </div>
            )}
          </div>

          {error && (
            <div className="rounded-md bg-red-900/30 p-4">
              <div className="text-sm text-red-300">{error}</div>
            </div>
          )}

          {success && (
            <div className="rounded-md bg-emerald-900/30 p-4">
              <div className="text-sm text-emerald-300">{success}</div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading || strengthScore < 4 || password !== confirmPassword}
              className="group relative w-full flex justify-center py-2.5 sm:py-2 px-4 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-green-900/10"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Create account'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 