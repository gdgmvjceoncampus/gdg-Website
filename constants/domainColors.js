/**
 * Domain Colors by Team Year
 * Colors are assigned based on the team year (2024, 2023, 2022, 2021)
 */

// Google brand colors
const colors = {
  red: { color: "#EA4335", darkColor: "#C5221F" },
  blue: { color: "#4285F4", darkColor: "#1967D2" },
  green: { color: "#0F9D58", darkColor: "#0B8043" },
  yellow: { color: "#FBBC04", darkColor: "#F9AB00" }
};

// Helper function to get domain colors based on year
export const getDomainColorsByYear = (year) => {
  const yearStr = String(year);
  
  if (yearStr === "2024") {
    return {
      tech: colors.red,
      "ml-android": colors.blue,
      design: colors.green,
      content: colors.yellow,
      community: colors.yellow
    };
  } else if (yearStr === "2023") {
    return {
      tech: colors.blue,
      "ml-android": colors.green,
      design: colors.red,
      content: colors.yellow,
      community: colors.blue,
      "social-media": colors.blue,
      "social-media-and-community": colors.blue
    };
  } else if (yearStr === "2022") {
    return {
      tech: colors.blue,
      android: colors.green,
      "ml-android": colors.green,
      design: colors.red,
      content: colors.yellow,
      community: colors.blue,
      "social-media": colors.green,
      "social-media-and-content": colors.green,
      "media-lead": colors.red,
      "media": colors.red
    };
  } else if (yearStr === "2021") {
    return {
      tech: colors.blue,
      design: colors.green,
      content: colors.blue,
      "content-and-pr": colors.blue,
      "social-media": colors.yellow,
      "social-media-and-marketing": colors.yellow,
      marketing: colors.yellow,
      community: colors.red
    };
  }
  
  // Default to 2024 colors if year not found
  return {
    tech: colors.red,
    "ml-android": colors.blue,
    design: colors.green,
    content: colors.yellow,
    community: colors.yellow
  };
};

// Helper function to get color for a role based on year
export const getColorForRole = (role, year) => {
  if (!role) return colors.blue.color;
  
  const roleLower = role.toLowerCase();
  const domainColors = getDomainColorsByYear(year);
  
  // Tech
  if (roleLower.includes("tech") || roleLower.includes("technical") || 
      roleLower.includes("web") || roleLower.includes("developer") || 
      roleLower.includes("development")) {
    return domainColors.tech?.color || colors.blue.color;
  }
  
  // ML & Android
  if (roleLower.includes("ml") || roleLower.includes("android") || 
      roleLower.includes("machine learning") || roleLower.includes("ai") ||
      roleLower.includes("artificial intelligence")) {
    return domainColors["ml-android"]?.color || domainColors.android?.color || colors.green.color;
  }
  
  // Design
  if (roleLower.includes("design") || roleLower.includes("designer") || 
      roleLower.includes("ui") || roleLower.includes("ux") || 
      roleLower.includes("graphic")) {
    return domainColors.design?.color || colors.green.color;
  }
  
  // Content / PR
  if (roleLower.includes("content-and-pr") || roleLower.includes("content and pr")) {
    return domainColors["content-and-pr"]?.color || colors.blue.color;
  }
  if (roleLower.includes("content") || roleLower.includes("writer") || 
      roleLower.includes("writing") || roleLower.includes("blog") || 
      roleLower.includes("blogger")) {
    return domainColors.content?.color || colors.yellow.color;
  }
  if (roleLower.includes("pr") && !roleLower.includes("content")) {
    return domainColors["content-and-pr"]?.color || colors.blue.color;
  }
  
  // Community / Social Media / Marketing
  if (roleLower.includes("community")) {
    return domainColors.community?.color || colors.yellow.color;
  }
  if (roleLower.includes("social media") || roleLower.includes("social-media") ||
      roleLower.includes("social-media-and-community") || roleLower.includes("social-media-and-content") ||
      roleLower.includes("social-media-and-marketing")) {
    return domainColors["social-media"]?.color || 
           domainColors["social-media-and-community"]?.color ||
           domainColors["social-media-and-content"]?.color ||
           domainColors["social-media-and-marketing"]?.color || colors.yellow.color;
  }
  if (roleLower.includes("marketing")) {
    return domainColors.marketing?.color || domainColors["social-media-and-marketing"]?.color || colors.yellow.color;
  }
  if (roleLower.includes("media") && !roleLower.includes("social")) {
    return domainColors["media-lead"]?.color || domainColors.media?.color || colors.red.color;
  }
  if (roleLower.includes("management") || roleLower.includes("manager") || roleLower.includes("outreach")) {
    return domainColors.community?.color || colors.yellow.color;
  }
  
  // Default
  return colors.blue.color;
};

// Helper function to get dark color for a role based on year
export const getDarkColorForRole = (role, year) => {
  if (!role) return colors.blue.darkColor;
  
  const roleLower = role.toLowerCase();
  const domainColors = getDomainColorsByYear(year);
  
  // Tech
  if (roleLower.includes("tech") || roleLower.includes("technical") || 
      roleLower.includes("web") || roleLower.includes("developer") || 
      roleLower.includes("development")) {
    return domainColors.tech?.darkColor || colors.blue.darkColor;
  }
  
  // ML & Android
  if (roleLower.includes("ml") || roleLower.includes("android") || 
      roleLower.includes("machine learning") || roleLower.includes("ai") ||
      roleLower.includes("artificial intelligence")) {
    return domainColors["ml-android"]?.darkColor || domainColors.android?.darkColor || colors.green.darkColor;
  }
  
  // Design
  if (roleLower.includes("design") || roleLower.includes("designer") || 
      roleLower.includes("ui") || roleLower.includes("ux") || 
      roleLower.includes("graphic")) {
    return domainColors.design?.darkColor || colors.green.darkColor;
  }
  
  // Content / PR
  if (roleLower.includes("content-and-pr") || roleLower.includes("content and pr")) {
    return domainColors["content-and-pr"]?.darkColor || colors.blue.darkColor;
  }
  if (roleLower.includes("content") || roleLower.includes("writer") || 
      roleLower.includes("writing") || roleLower.includes("blog") || 
      roleLower.includes("blogger")) {
    return domainColors.content?.darkColor || colors.yellow.darkColor;
  }
  if (roleLower.includes("pr") && !roleLower.includes("content")) {
    return domainColors["content-and-pr"]?.darkColor || colors.blue.darkColor;
  }
  
  // Community / Social Media / Marketing
  if (roleLower.includes("community")) {
    return domainColors.community?.darkColor || colors.yellow.darkColor;
  }
  if (roleLower.includes("social media") || roleLower.includes("social-media") ||
      roleLower.includes("social-media-and-community") || roleLower.includes("social-media-and-content") ||
      roleLower.includes("social-media-and-marketing")) {
    return domainColors["social-media"]?.darkColor || 
           domainColors["social-media-and-community"]?.darkColor ||
           domainColors["social-media-and-content"]?.darkColor ||
           domainColors["social-media-and-marketing"]?.darkColor || colors.yellow.darkColor;
  }
  if (roleLower.includes("marketing")) {
    return domainColors.marketing?.darkColor || domainColors["social-media-and-marketing"]?.darkColor || colors.yellow.darkColor;
  }
  if (roleLower.includes("media") && !roleLower.includes("social")) {
    return domainColors["media-lead"]?.darkColor || domainColors.media?.darkColor || colors.red.darkColor;
  }
  if (roleLower.includes("management") || roleLower.includes("manager") || roleLower.includes("outreach")) {
    return domainColors.community?.darkColor || colors.yellow.darkColor;
  }
  
  // Default
  return colors.blue.darkColor;
};

// Extract year from team slug (e.g., "2024" from "2024" or "team-2024")
export const getYearFromSlug = (teamSlug) => {
  if (!teamSlug) return "2024";
  const match = teamSlug.match(/(\d{4})/);
  return match ? match[1] : "2024";
};
