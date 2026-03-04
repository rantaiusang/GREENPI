/**
 * pi-config.js
 * MASTER CONFIGURATION - GreenProof (FINAL FIX)
 */

window.APP_CONFIG = {

    /* =====================================================
       1. ENVIRONMENT
    ===================================================== */
    IS_SANDBOX: false, 

    /* =====================================================
       2. SUPABASE CONFIG
    ===================================================== */
    SUPABASE_URL: "https://lrzaiftdikcjehtlbwlg.supabase.co",
    
    // Key ini tampaknya valid, pastikan di Supabase RLS diaktifkan
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyemFpZnRkaWtjamVodGxid2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NzU0MzgsImV4cCI6MjA4NzI1MTQzOH0.TWD0Te1E7ELpBBrmWapvjZKyqvWerxl90vtmyvucNFc", 

    /* =====================================================
       3. PI NETWORK CONFIG
    ===================================================== */
    PI: {
        // APP_ID wajib sama dengan di Pi Developer Portal
        APP_ID: "greenpi-4ff6e4820b8ff1a8", 
        
        // ⛔ HAPUS SDK_VERSION! Pi SDK v2.0 TIDAK BOLEH menerima parameter version.
        // SCOPES tetap diperlukan untuk login.
        SCOPES: ["username", "payments"]
    }
};

console.log("✅ pi-config.js Loaded. Mode:", window.APP_CONFIG.IS_SANDBOX ? "SANDBOX" : "PRODUCTION");
