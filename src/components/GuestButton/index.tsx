import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function logout() {
  document.cookie = 'hc_auth=; Path=/; SameSite=Lax; Max-Age=0';
  window.location.replace('/login.html');
}

export default function GuestButton(): JSX.Element {
  return (
    <button
      type="button"
      className={clsx(styles.guestBtn, styles.loggedOut)}
      onClick={logout}
      title="Sair da conta">
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"
        />
      </svg>
      <span>Guest</span>
    </button>
  );
}