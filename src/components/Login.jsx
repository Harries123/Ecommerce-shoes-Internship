import React, { useState } from "react";
import styles from "./Login.module.css";

const InputField = ({ type, icon, placeholder, ariaLabel, value, onChange, toggleVisibility }) => (
  <div className={styles.inputField}>
    <img src={icon} alt="" className={styles.inputIcon} />
    <label htmlFor={type} className={styles.visuallyHidden}>
      {ariaLabel}
    </label>
    <input
      type={type}
      id={type}
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
    />
    {toggleVisibility && (
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a872d8b7a1eeab21cbc8dd8d8526b3b87cb6b51ca4b132f5fa0c3bef2487baa9?placeholderIfAbsent=true&apiKey=4e9a3a74774e49febf4cd599b4d87e33"
        alt="Toggle visibility"
        className={styles.visibilityToggle}
        onClick={toggleVisibility}
        role="button"
        tabIndex="0"
      />
    )}
  </div>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle the login logic (e.g., API call, form validation)
    alert(`Logging in with Email: ${email}, Password: ${password}`);
  };

  return (
    <main className={styles.loginContainer}>
      <section className={styles.loginCard}>
        <form className={styles.formContainer} onSubmit={handleLogin}>
          <h1 className={styles.welcomeTitle}>Welcome Back!</h1>

          <InputField
            type="email"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c86e927dd7a447a023644dd050e2291ada4a5354d0e3a16a41aa65b7b9881da2?placeholderIfAbsent=true&apiKey=4e9a3a74774e49febf4cd599b4d87e33"
            placeholder="Enter your email"
            ariaLabel="Email input field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            type={showPassword ? "text" : "password"}
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/287994dbd3f8617cedaf52df234fe811ccceeafb1e418ed39308f0b01027a9ba?placeholderIfAbsent=true&apiKey=4e9a3a74774e49febf4cd599b4d87e33"
            placeholder="Enter your password"
            ariaLabel="Password input field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleVisibility={() => setShowPassword((prev) => !prev)}
          />

          <button type="submit" className={styles.submitButton}>
            Login
          </button>
          <button
            type="button"
            className={styles.forgotPassword}
            onClick={() => alert("Password reset feature coming soon!")}
          >
            Forgot Password?
          </button>
        </form>
      </section>
    </main>
  );
}
