"use client";

import { useState, useEffect } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { 
  X, 
  Mail, 
  Lock, 
  User,
  Eye, 
  EyeOff, 
  Loader2, 
  ArrowRight,
  ArrowLeft,
  KeyRound,
  ShieldCheck
} from "lucide-react";
import {
  Sheet,
  SheetTitle,
  SheetTrigger,
  SheetPortal,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface LoginSidebarProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}

// Extended ViewState to include OTP steps
type ViewState = "login" | "signup" | "signup-otp" | "forgot" | "forgot-otp";

export const LoginSidebar: React.FC<LoginSidebarProps> = ({ variant = "ghost", className }) => {
  // Navigation & UI State
  const [view, setView] = useState<ViewState>("login");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form Data States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState(""); // For forgot password flow

  // Visibility Toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  // Validation Errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [otpError, setOtpError] = useState("");

  // Countdown Timer for Resend OTP
  const [timer, setTimer] = useState(30);

  // Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if ((view === "signup-otp" || view === "forgot-otp") && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [view, timer]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setOtp("");
    setNewPassword("");
    setEmailError("");
    setPasswordError("");
    setOtpError("");
    setIsLoading(false);
    setTimer(30);
  };

  const handleViewChange = (newView: ViewState) => {
    // Only reset form data if we are completely switching contexts (e.g. login -> signup)
    // Don't reset if moving from signup -> signup-otp
    if (
      (view === "signup" && newView === "signup-otp") || 
      (view === "forgot" && newView === "forgot-otp")
    ) {
        setOtp(""); // Just clear OTP input
        setTimer(30);
    } else {
        resetForm();
    }
    setView(newView);
  };

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePassword = (value: string) => value.length >= 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    
    // Clear previous errors
    setEmailError("");
    setPasswordError("");
    setOtpError("");

    // --- Validation Logic based on View ---
    
    // 1. Initial Login/Signup/Forgot validation
    if (["login", "signup", "forgot"].includes(view)) {
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            valid = false;
        }
    }

    // 2. Password validation for Login/Signup
    if (["login", "signup"].includes(view)) {
        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 8 characters.");
            valid = false;
        }
    }

    // 3. Name validation for Signup
    if (view === "signup" && name.trim().length < 2) {
        valid = false; // Add specific name error if needed
    }

    // 4. OTP Validation
    if (["signup-otp", "forgot-otp"].includes(view)) {
        if (otp.length !== 6) {
            setOtpError("Please enter a valid 6-digit code.");
            valid = false;
        }
    }

    // 5. New Password Validation (Forgot Flow)
    if (view === "forgot-otp") {
        if (!validatePassword(newPassword)) {
            setPasswordError("New password must be at least 8 characters.");
            valid = false;
        }
    }

    if (valid) {
      setIsLoading(true);
      
      // Simulate API Network Request
      setTimeout(() => {
        setIsLoading(false);
        
        if (view === "signup") {
            // API: Send OTP to email
            handleViewChange("signup-otp");
        } else if (view === "forgot") {
            // API: Send OTP to email
            handleViewChange("forgot-otp");
        } else if (view === "signup-otp") {
            // API: Verify OTP & Create Account
            console.log("Account Created!", { name, email, password });
            setIsOpen(false);
            resetForm(); // Reset everything
            setView("login");
        } else if (view === "forgot-otp") {
            // API: Verify OTP & Reset Password
            console.log("Password Reset!", { email, newPassword });
            handleViewChange("login");
            alert("Password changed successfully! Please login.");
        } else {
            // Login Success
            console.log("Logged In!", { email, password });
            setIsOpen(false);
        }
      }, 1500);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant={variant} className={className} onClick={() => handleViewChange("login")}>
          Log In
        </Button>
      </SheetTrigger>
      <SheetPortal>
        <SheetPrimitive.Content className="fixed inset-y-0 right-0 z-50 h-full w-full border-l bg-background p-0 shadow-2xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md flex flex-col">
          
          {/* Header Section */}
          <div className="relative p-6 pt-12 pb-2 flex flex-col items-center">
            <SheetPrimitive.Close className="absolute right-6 top-6 rounded-full p-2 opacity-70 ring-offset-background transition-all hover:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetPrimitive.Close>

            {/* Logo */}
            <div className="mb-4">
              <img src="/sellsyncbg.png" alt="SellSync Logo" className="h-24 w-auto" />
            </div>

            <SheetTitle className="text-2xl font-semibold tracking-tight text-center text-foreground">
              {view === "login" && "Welcome back"}
              {view === "signup" && "Create an account"}
              {view === "forgot" && "Reset Password"}
              {(view === "signup-otp" || view === "forgot-otp") && "Verify Email"}
            </SheetTitle>
            
            <p className="mt-2 text-center text-sm text-muted-foreground max-w-xs">
              {view === "login" && "Enter your credentials to access your personalized dashboard."}
              {view === "signup" && "Enter your details to get started with SellSync today."}
              {view === "forgot" && "Enter your email address and we'll send you a code."}
              {(view === "signup-otp" || view === "forgot-otp") && (
                <span>
                  We've sent a 6-digit code to <span className="font-medium text-foreground">{email}</span>
                </span>
              )}
            </p>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col gap-6">
              
              {/* Google Button (Hide during OTP or Forgot flow) */}
              {(view === "login" || view === "signup") && (
                <>
                  <Button variant="outline" className="w-full py-5 flex items-center justify-center gap-3 font-normal text-gray-700 hover:text-black hover:bg-gray-50 border-gray-200">
                     <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Continue with Google
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or continue with email
                      </span>
                    </div>
                  </div>
                </>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* --- INPUT FIELDS --- */}

                {/* Name (Signup Only) */}
                {view === "signup" && (
                  <div className="space-y-2 animate-in slide-in-from-right-4 fade-in duration-300">
                    <label className="text-sm font-medium leading-none">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input type="text" placeholder="John Doe" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                  </div>
                )}

                {/* Email (Visible in Login, Signup, Forgot - Hidden in OTP unless you want to show it read-only) */}
                {(view === "login" || view === "signup" || view === "forgot") && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input type="email" placeholder="name@example.com" className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all ${emailError ? "border-red-500 focus-visible:ring-red-500" : "border-input focus-visible:ring-orange-500"}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {emailError && <p className="text-[0.8rem] font-medium text-red-500">{emailError}</p>}
                  </div>
                )}

                {/* Password (Login & Signup Only) */}
                {(view === "login" || view === "signup") && (
                  <div className="space-y-2 animate-in slide-in-from-bottom-2 fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium leading-none">Password</label>
                      {view === "login" && (
                        <button type="button" onClick={() => handleViewChange("forgot")} className="text-xs font-medium text-orange-600 hover:text-orange-500 hover:underline">
                          Forgot password?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input type={showPassword ? "text" : "password"} placeholder="••••••••" className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 pl-10 pr-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all ${passwordError ? "border-red-500 focus-visible:ring-red-500" : "border-input focus-visible:ring-orange-500"}`} value={password} onChange={(e) => setPassword(e.target.value)} />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground focus:outline-none">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {passwordError && <p className="text-[0.8rem] font-medium text-red-500">{passwordError}</p>}
                  </div>
                )}

                {/* --- OTP & RESET FIELDS --- */}

                {(view === "signup-otp" || view === "forgot-otp") && (
                  <div className="space-y-4 animate-in zoom-in-95 fade-in duration-300">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">One-Time Password</label>
                        <div className="relative">
                            <ShieldCheck className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input 
                                type="text" 
                                placeholder="123456" 
                                maxLength={6}
                                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 pl-10 text-sm tracking-[0.5em] font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all ${otpError ? "border-red-500 focus-visible:ring-red-500" : "border-input focus-visible:ring-orange-500"}`} 
                                value={otp} 
                                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))} 
                            />
                        </div>
                        {otpError && <p className="text-[0.8rem] font-medium text-red-500">{otpError}</p>}
                        
                        <div className="flex justify-end">
                            <button 
                                type="button" 
                                disabled={timer > 0}
                                onClick={() => setTimer(30)}
                                className={`text-xs font-medium ${timer > 0 ? "text-muted-foreground cursor-not-allowed" : "text-orange-600 hover:underline"}`}
                            >
                                {timer > 0 ? `Resend code in ${timer}s` : "Resend code"}
                            </button>
                        </div>
                    </div>

                    {/* New Password Field (Only for Forgot OTP flow) */}
                    {view === "forgot-otp" && (
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">New Password</label>
                            <div className="relative">
                                <KeyRound className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <input 
                                    type={showNewPassword ? "text" : "password"} 
                                    placeholder="••••••••" 
                                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 pl-10 pr-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all ${passwordError ? "border-red-500 focus-visible:ring-red-500" : "border-input focus-visible:ring-orange-500"}`} 
                                    value={newPassword} 
                                    onChange={(e) => setNewPassword(e.target.value)} 
                                />
                                <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground focus:outline-none">
                                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {passwordError && <p className="text-[0.8rem] font-medium text-red-500">{passwordError}</p>}
                        </div>
                    )}
                  </div>
                )}

                {/* --- SUBMIT BUTTON --- */}
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 rounded-md transition-all shadow-sm active:scale-[0.98]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait...
                    </>
                  ) : (
                    <>
                      {view === "login" && <>Sign In <ArrowRight className="ml-2 h-4 w-4" /></>}
                      {view === "signup" && <>Create Account <ArrowRight className="ml-2 h-4 w-4" /></>}
                      {view === "signup-otp" && <>Verify & Create <CheckCircle2 className="ml-2 h-4 w-4" /></>}
                      {view === "forgot" && <>Send OTP <Mail className="ml-2 h-4 w-4" /></>}
                      {view === "forgot-otp" && <>Reset Password <CheckCircle2 className="ml-2 h-4 w-4" /></>}
                    </>
                  )}
                </Button>
                
                {/* Back button for secondary views */}
                {view !== "login" && (
                   <Button
                   type="button"
                   variant="ghost"
                   disabled={isLoading}
                   onClick={() => {
                        if (view === "signup-otp") handleViewChange("signup");
                        else if (view === "forgot-otp") handleViewChange("forgot");
                        else handleViewChange("login");
                   }}
                   className="w-full text-muted-foreground hover:text-foreground"
                 >
                   <ArrowLeft className="mr-2 h-4 w-4" /> 
                   {(view === "signup-otp" || view === "forgot-otp") ? "Back" : "Back to Login"}
                 </Button>
                )}
              </form>

              {/* Toggle Login/Signup (Only visible on main screens) */}
              {(view === "login" || view === "signup") && (
                <div className="text-center text-sm">
                  <span className="text-muted-foreground">
                    {view === "login" ? "Don't have an account? " : "Already have an account? "}
                  </span>
                  <button 
                    type="button"
                    onClick={() => handleViewChange(view === "login" ? "signup" : "login")}
                    className="font-semibold text-foreground hover:underline hover:text-orange-600 transition-colors"
                  >
                    {view === "login" ? "Create an account" : "Log in"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Footer Section */}
          <div className="p-6 bg-muted/20 border-t border-border/40 mt-auto">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
            <p className="text-center text-[10px] text-muted-foreground/60 mt-4">
              © 2025 SellSync. All rights reserved.
            </p>
          </div>
          
        </SheetPrimitive.Content>
      </SheetPortal>
    </Sheet>
  );
};