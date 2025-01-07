export default function useBrowserUUID() {
  const getUUID = () => {
    let uuid = localStorage.getItem("browserUUID");
    if (!uuid) {
      uuid = crypto.randomUUID();
      localStorage.setItem("browserUUID", uuid);
    }
    return uuid;
  };

  return { getUUID };
}
