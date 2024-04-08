// check if running in development from vite
const isDev = import.meta.env.DEV;
const baseUrl = isDev ? "http://localhost:8000/api" : "/api";

export async function killAll() {
    await fetch(`${baseUrl}/killall`, { method: "POST" });
}
