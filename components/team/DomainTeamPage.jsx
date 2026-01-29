import React, { useEffect, useState } from "react";
import { devices } from "@/constants/theme";
import {
  DomainTeamPageContainer,
  DomainHeader,
  BackButton,
  DomainTitle,
  TeamLeadSection,
  TeamMembersSection,
  MemberGrid,
  MemberCard,
  MemberImageContainer,
  MemberName,
  MemberActions
} from "./DomainTeamPage.styled";
import Typography from "../display/typography/Typography";
import { useTheme } from "styled-components";
import Avatar from "../avatar/Avatar";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PaletteIcon from "@mui/icons-material/Palette";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import { getDomainColorsByYear, getYearFromSlug, getColorForRole, getDarkColorForRole } from "@/constants/domainColors";

const domainIcons = {
  tech: CodeIcon,
  "ml-android": PsychologyIcon,
  design: PaletteIcon,
  content: ArticleIcon,
  community: PeopleIcon
};

const domainTitles = {
  tech: "Tech",
  "ml-android": "ML & Android",
  design: "Design",
  content: "Content",
  community: "Community"
};

const DomainTeamPage = ({ teamData, domain, teamSlug }) => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const year = getYearFromSlug(teamSlug);
  const domainColors = getDomainColorsByYear(year);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.lg);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const Icon = domainIcons[domain] || CodeIcon;
  const colors = domainColors[domain] || domainColors.tech || { color: "#4285F4", darkColor: "#1967D2" };
  const domainTitle = domainTitles[domain] || "Tech";

  // Helper function to match domain
  const roleMatchesDomain = (role, domain) => {
    const roleLower = role.toLowerCase();
    if (domain === "tech") {
      return roleLower.includes("technical") || 
             roleLower.includes("tech") || 
             roleLower.includes("web") || 
             roleLower.includes("developer") ||
             roleLower.includes("development");
    } else if (domain === "ml-android") {
      return roleLower.includes("android") || 
             roleLower.includes("ml") || 
             roleLower.includes("machine learning") || 
             roleLower.includes("ai") ||
             roleLower.includes("artificial intelligence");
    } else if (domain === "design") {
      return roleLower.includes("design") || 
             roleLower.includes("designer") || 
             roleLower.includes("ui") || 
             roleLower.includes("ux") ||
             roleLower.includes("graphic");
    } else if (domain === "content") {
      return (roleLower.includes("content") && !roleLower.includes("social")) || 
             roleLower.includes("writer") || 
             roleLower.includes("writing") || 
             roleLower.includes("blog") ||
             roleLower.includes("blogger") ||
             (roleLower.includes("pr") && !roleLower.includes("social"));
    } else if (domain === "community") {
      return roleLower.includes("community") || 
             (roleLower.includes("social") && roleLower.includes("media")) ||
             roleLower.includes("social-media") ||
             roleLower.includes("marketing") ||
             (roleLower.includes("management") && !roleLower.includes("media")) ||
             (roleLower.includes("manager") && !roleLower.includes("media")) ||
             roleLower.includes("outreach");
    }
    return false;
  };

  // Filter members by domain
  const allMembers = [...(teamData.core || []), ...(teamData.members || [])];
  const domainMembers = allMembers.filter((member) => 
    roleMatchesDomain(member.role, domain)
  );

  // Find domain lead (first core member or first member)
  const domainLead = domainMembers.find((member) => member.type === "core") || domainMembers[0];
  const domainTeamMembers = domainMembers.filter((member) => member.id !== domainLead?.id);

  // Get color for member based on their role and year
  const getMemberColor = (member) => {
    return getColorForRole(member.role, year);
  };

  const getMemberDarkColor = (member) => {
    return getDarkColorForRole(member.role, year);
  };

  return (
    <DomainTeamPageContainer>
      <DomainHeader backgroundColor={colors.color}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", position: "relative" }}>
          <Link
            href={`/team/${teamSlug}`}
            style={{ textDecoration: "none", marginLeft: "1rem" }}
          >
            <BackButton>
              <ArrowBackIcon sx={{ fontSize: 20 }} />
              <span>Back to Team</span>
            </BackButton>
          </Link>
          <DomainTitle style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "fit-content" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                backgroundColor: colors.darkColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon sx={{ fontSize: 16, color: "white" }} />
            </div>
            <Typography variant="h2" style={{ margin: 0 }}>
              {domainTitle} Team
            </Typography>
          </DomainTitle>
          <div style={{ width: "140px" }} /> {/* Spacer to balance layout */}
        </div>
      </DomainHeader>

      <main style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}>
        {/* Team Lead Section */}
        {domainLead && (
          <TeamLeadSection>
            <Typography variant="h1" style={{ textAlign: "center", marginBottom: "3rem" }}>
              Team Lead
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MemberCard>
                <MemberImageContainer borderColor={colors.darkColor}>
                  <Avatar
                    size={isMobile ? "xl" : "xl"}
                    borderColor={colors.darkColor}
                    url={domainLead.profile.image}
                    borderWidth={4}
                  />
                </MemberImageContainer>
                <MemberName>
                  <Typography variant="h3">{domainLead.profile.name}</Typography>
                </MemberName>
                <MemberActions>
                  {domainLead.profile.profileLink && (
                    <Link
                      href={domainLead.profile.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: theme.colors.bgSecondary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s"
                      }}
                    >
                      <LinkedInIcon sx={{ fontSize: 16, color: theme.colors.textPrimary }} />
                    </Link>
                  )}
                  {domainLead.profile.social && (
                    <Link
                      href={`mailto:${domainLead.profile.social}`}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: theme.colors.bgSecondary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s"
                      }}
                    >
                      <MailIcon sx={{ fontSize: 16, color: theme.colors.textPrimary }} />
                    </Link>
                  )}
                </MemberActions>
              </MemberCard>
            </div>
          </TeamLeadSection>
        )}

        {/* Team Members Section */}
        {domainTeamMembers.length > 0 && (
          <TeamMembersSection>
            <Typography variant="h1" style={{ textAlign: "center", marginBottom: "3rem" }}>
              Team Members
            </Typography>
            <MemberGrid>
              {domainTeamMembers.map((member, index) => {
                const memberColor = getMemberColor(member);
                const memberDarkColor = getMemberDarkColor(member);
                return (
                <MemberCard key={member.id}>
                  <MemberImageContainer borderColor={memberDarkColor}>
                    <Avatar
                      size={isMobile ? "lg" : "xl"}
                      borderColor={memberDarkColor}
                      url={member.profile.image}
                      borderWidth={4}
                    />
                  </MemberImageContainer>
                  <MemberName>
                    <Typography variant="h5">{member.profile.name}</Typography>
                  </MemberName>
                  <MemberActions>
                    {member.profile.profileLink && (
                      <Link
                        href={member.profile.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          backgroundColor: theme.colors.bgSecondary,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s"
                        }}
                      >
                        <LinkedInIcon sx={{ fontSize: 16, color: theme.colors.textPrimary }} />
                      </Link>
                    )}
                    {member.profile.social && (
                      <Link
                        href={`mailto:${member.profile.social}`}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          backgroundColor: theme.colors.bgSecondary,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s"
                        }}
                      >
                        <MailIcon sx={{ fontSize: 16, color: theme.colors.textPrimary }} />
                      </Link>
                    )}
                  </MemberActions>
                </MemberCard>
              );
              })}
            </MemberGrid>
          </TeamMembersSection>
        )}

        {/* Back to domains */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link
            href={`/team/${teamSlug}`}
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                backgroundColor: theme.colors.textPrimary,
                color: "white",
                border: "none",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              <ArrowBackIcon sx={{ fontSize: 20 }} />
              Explore Other Domains
            </button>
          </Link>
        </div>
      </main>
    </DomainTeamPageContainer>
  );
};

export default DomainTeamPage;

