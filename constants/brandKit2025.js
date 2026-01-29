/**
 * GDSC MVJCE 2025 Brand Kit Colors
 * 
 * Please update these colors with the exact values from the 2025 brand kit PDF
 */

export const brandKit2025 = {
  // Domain-specific colors for Team 2025
  // Colors from official 2025 brand kit
  domains: {
    tech: {
      name: "Tech",
      color: "#ea4335", // Red from 2025 brand kit
      description: "Tech domain color"
    },
    mlAndroid: {
      name: "ML and Android",
      color: "#4285f4", // Blue from 2025 brand kit
      description: "ML and Android domain color"
    },
    content: {
      name: "Content",
      color: "#ffd427", // Yellow from 2025 brand kit
      description: "Content domain color"
    },
    community: {
      name: "Community",
      color: "#f0f0f0", // Light grey from 2025 brand kit
      description: "Community domain color"
    },
    design: {
      name: "Design",
      color: "#34a853", // Green from 2025 brand kit
      description: "Design domain color"
    }
  }
};

/**
 * Helper function to get color for a role in Team 2025
 * @param {string} role - The member's role
 * @returns {string} - Hex color code
 */
export const getColorForRole2025 = (role) => {
  if (!role) return brandKit2025.domains.tech.color;
  
  const roleLower = role.toLowerCase();
  
  // Tech - Red
  if (roleLower.includes("tech")) {
    return brandKit2025.domains.tech.color;
  }
  // ML and Android - Blue
  if (roleLower.includes("ml") || roleLower.includes("android")) {
    return brandKit2025.domains.mlAndroid.color;
  }
  // Content - Yellow
  if (roleLower.includes("content")) {
    return brandKit2025.domains.content.color;
  }
  // Community - Grey
  if (roleLower.includes("community")) {
    return brandKit2025.domains.community.color;
  }
  // Design - Green
  if (roleLower.includes("design")) {
    return brandKit2025.domains.design.color;
  }
  
  // Default fallback
  return brandKit2025.domains.tech.color;
};
