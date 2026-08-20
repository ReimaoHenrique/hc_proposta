function isAuthenticated() {
  return document.cookie
    .split(';')
    .some((c) => c.trim().startsWith('hc_auth=1'));
}

function redirectToLogin() {
  const path = window.location.pathname;
  if (path.includes('login')) {
    return;
  }
  const next = encodeURIComponent(
    window.location.pathname + window.location.search
  );
  window.location.replace('/login.html?next=' + next);
}

export function onClientEntry() {
  if (!isAuthenticated()) {
    redirectToLogin();
  }
}

export function onRouteDidUpdate() {
  if (!isAuthenticated()) {
    redirectToLogin();
  }
}