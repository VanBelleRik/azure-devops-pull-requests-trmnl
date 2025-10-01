import express from "express";
import fetch from "node-fetch"; // For plugin communication
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ 'value': 'hello-world' })
})

// Example route: Proxy to TRMNL-plugin API
app.post("/api/send", async (req, res) => {
    try {
        const { message } = req.body;

        // Call your TRMNL-plugin API here
        const response = await fetch("http://localhost:4000/plugin-endpoint", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: message }),
        });

        const data = await response.json();
        res.json({ reply: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to reach TRMNL-plugin" });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});