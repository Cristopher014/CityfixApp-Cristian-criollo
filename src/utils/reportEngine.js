const SUPABASE_URL = "https://olokcmfocijqlsfueyuu.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sb2tjbWZvY2lqcWxzZnVleXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTE4NzEsImV4cCI6MjA5NTYyNzg3MX0.NK7xZSwy6nvF3BcryB_rTQYjKIqM2N0eDPakRXBJOQM";

async function getReports() {
    try {
        const response = await fetch(
        `${SUPABASE_URL}/rest/v1/reports`,
        {
            method: "GET",
            headers: {
            apikey: SUPABASE_API_KEY,
            Authorization: `Bearer ${SUPABASE_API_KEY}`,
            "Content-Type": "application/json"
            }
        }
        );

        if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Error obteniendo reportes:", error);
        throw error;
    }
}

module.exports = {
    getReports
};