export default {
  async fetch(request) {
    return new Response(JSON.stringify({
      cpu: Math.floor(Math.random() * 100),
      memory: Math.floor(Math.random() * 100),
      status: "healthy"
    }), {
      headers: { "content-type": "application/json" }
    });
  }
}
