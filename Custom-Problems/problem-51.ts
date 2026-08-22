/**
 * Problem 51 — Gaming Age Rating Checker
 * Concepts: function parameter types, return types, string, conditional logic
 * 
 * Scenario:
 * A gaming platform, similar to Steam or the PlayStation Store, needs to determine 
 * which age-rating category of games a user is allowed to access, based on their age.
 * 
 * Rating Rules:
 * - Below 7: "E (Everyone)"
 * - 7–12: "E10+ (Everyone 10+)"
 * - 13–16: "T (Teen)"
 * - 17 or above: "M (Mature)"
 */

function getAgeRatingAccess(age: number): string {
    if (age < 7) {
        return "E (Everyone)";
    } else if (age <= 12) {
        return "E10+ (Everyone 10+)";
    } else if (age <= 16) {
        return "T (Teen)";
    }

    return "M (Mature)";
}
