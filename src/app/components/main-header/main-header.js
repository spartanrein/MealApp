'use client';

import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { useEffect, useState } from "react";

function ThemeToggleButton() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    // On mount, set theme from localStorage or system
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      className={classes.themeToggle}
      style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link className={classes.logo} href={"/"}>
                    <Image src={logoImg} alt ="A plate with food in it" priority/>
                    NextLevel Food
                </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
            <ThemeToggleButton />
            </header>
        </>
    )
}