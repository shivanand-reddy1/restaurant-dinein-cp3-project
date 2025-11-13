import app from "./app.js";

const PORT = process.env.PORT || 4000; // Use port from .env or default to 4000

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});