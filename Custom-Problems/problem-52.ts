/**
 * Problem 52 — Smart Home WiFi Signal Status
 * Concepts: function types, number, string, conditional logic, boundary conditions
 * 
 * Scenario:
 * A smart home app shows the WiFi signal strength of each connected device as a percentage. 
 * Rather than showing a raw number, the app wants to display a friendly status label.
 * 
 * Status Rules:
 * - 0–20: "Weak"
 * - 21–50: "Fair"
 * - 51–80: "Good"
 * - 81–100: "Excellent"
 */

function getSignalStatus(strength: number): string {
    if (strength <= 20) {
        return "Weak";
    } else if (strength <= 50) {
        return "Fair";
    } else if (strength <= 80) {
        return "Good";
    }

    return "Excellent";
}
