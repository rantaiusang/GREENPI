/**
 * pi-config.js
 * MASTER CONFIGURATION - GreenProof (REVISED)
 */

window.APP_CONFIG = {

    /* =====================================================
       1. ENVIRONMENT (CRITICAL FIX)
    ===================================================== */
    // PERBAIKAN: Karena Anda membuka greenpi.vercel.app (Production Domain),
    // SDK harus diset ke false. Jika diset true, akan error 'Target Origin Mismatch'.
    IS_SANDBOX: false, 

    /* =====================================================
       2. SUPABASE CONFIG (ACTION REQUIRED)
    ===================================================== */
    SUPABASE_URL: "https://lrzaiftdikcjehtlbwlg.supabase.co",
    
    // ⚠️ PERINGATAN: Silakan COPY-PASTE 'anon public key' yang BARU dari 
    // Dashboard Supabase Anda (Project Settings > API).
    // Key yang lama kemungkinan sudah tidak valid atau salah format.
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyemFpZnRkaWtjamVodGxid2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NzU0MzgsImV4cCI6MjA4NzI1MTQzOH0.TWD0Te1E7ELpBBrmWapvjZKyqvWerxl90vtmyvucNFc", 

    /* =====================================================
       3. PI NETWORK CONFIG
    ===================================================== */
    PI: {
        // Pastikan APP_ID ini sudah di-approve di Pi Developer Console untuk Platform: Web
        APP_ID: "26949299605f32", 
        SDK_VERSION: "2.0",
        SCOPES: ["username", "payments"]
    }
};

console.log("✅ pi-config.js Loaded. Mode:", window.APP_CONFIG.IS_SANDBOX ? "SANDBOX" : "PRODUCTION");
