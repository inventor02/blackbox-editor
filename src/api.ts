// check if running in development from vite
const isDev = import.meta.env.DEV;
const baseUrl = isDev ? "http://localhost:8000/api" : "/api";

export async function killAll() {
    await fetch(`${baseUrl}/killall`, { method: "POST" });
}

export async function getConfig() {
    return (await fetch(`${baseUrl}/config`)).text();
}

export async function postConfig(config: string) {
    await fetch(`${baseUrl}/config`, {
        method: "POST",
        body: config,
    });
}
