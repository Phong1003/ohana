function getCurrentDomain() {
  const parts = window.location.hostname.split(".");
  parts.shift();
  return parts.join(".");
}

export { getCurrentDomain };
