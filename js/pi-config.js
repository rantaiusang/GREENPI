**
 * pi-config.js
 * MASTER CONFIGURATION
 * Version: 2.0 - Production Ready
 *
 * File ini adalah pusat konfigurasi aplikasi GreenProof
 * Pastikan URL dan Key sudah benar sebelum deploy.
 */

window.APP_CONFIG = {

    /* =====================================================
       1. ENVIRONMENT
    ===================================================== */

    // TRUE = Testing di Sandbox
    // FALSE = Production / Mainnet
    IS_SANDBOX: false,


    /* =====================================================
       2. SUPABASE CONFIG
    ===================================================== */

    // Supabase Public Anon Key
    SUPABASE_ANON_KEY: "GANTI_DENGAN_ANON_KEY_KAMU",

    // Supabase Project URL
    SUPABASE_URL: "https://YOUR-PROJECT.supabase.co",


    /* =====================================================
       3. API ENDPOINTS (Untuk Backend / Edge)
    ===================================================== */

    ENDPOINTS: {
        LOGIN: "/auth/verify-user-login",
        VERIFY_PAYMENT: "/payments/verify-payment",
        CHECK_STATUS: "/payments/check-status"
    },


    /* =====================================================
       4. PI NETWORK CONFIG
    ===================================================== */

    PI: {
        // Ambil dari Developer Console Pi
        APP_ID: "GREENPI_APP_ID",
        SDK_VERSION: "2.0",
        SCOPES: ["username", "payments"]
    }

};



/* =========================================================
   HELPER FUNCTIONS (DI LUAR OBJECT)
========================================================= */

/**
 * Generate Endpoint URL dengan aman
 * Contoh:
 * getAppUrl("LOGIN")
 */
window.getAppUrl = function (endpointKey) {

    if (!window.APP_CONFIG) {
        console.error("APP_CONFIG belum dimuat.");
        return "#";
    }

    const baseUrl = window.APP_CONFIG.SUPABASE_URL;
    const endpoint = window.APP_CONFIG.ENDPOINTS?.[endpointKey];

    if (!baseUrl || !endpoint) {
        console.error("Endpoint tidak ditemukan:", endpointKey);
        return "#";
    }

    return ${baseUrl.replace(/\/+$/, "")}/${endpoint.replace(/^\/+/, "")};
};



/* =========================================================
   DEBUG LOG
========================================================= */

console.log("✅ Pi Config Loaded Successfully");
console.log("Mode:", window.APP_CONFIG.IS_SANDBOX ? "SANDBOX" : "PRODUCTION");
