/**
 * pi-config.js
 * MASTER CONFIGURATION - GreenProof
 */

window.APP_CONFIG = {

    /* =====================================================
       1. ENVIRONMENT
    ===================================================== */
    // Jika Anda testing di Pi Browser Sandbox, ubah ke true.
    // Jika sudah deploy untuk user sungguhan, ubah ke false.
    IS_SANDBOX: true, 

    /* =====================================================
       2. SUPABASE CONFIG
    ===================================================== */
    // Menggunakan data dari kode Anda sebelumnya
    SUPABASE_URL: "https://lrzaiftdikcjehtlbwlg.supabase.co",
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpa2FwcXVodXNid2pjY2JxY3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNjQ1NTQsImV4cCI6MjA4NDc0MDU1NH0.X278oHDF0be7oa25484eliSukSYAYvDbJyU6ysz83zA",

    /* =====================================================
       3. PI NETWORK CONFIG
    ===================================================== */
    PI: {
        // Pastikan ini SAMA PERSIS dengan yang ada di Pi Developer Console
        APP_ID: "26949299605f32", 
        SDK_VERSION: "2.0",
        SCOPES: ["username", "payments"]
    }
};

console.log("✅ pi-config.js Loaded. Mode:", window.APP_CONFIG.IS_SANDBOX ? "SANDBOX" : "PRODUCTION");
