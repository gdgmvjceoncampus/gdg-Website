import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DomainSideNavContainer, DomainNavButton } from "./DomainSideNav.styled";
import { getDomainColorsByYear, getYearFromSlug } from "@/constants/domainColors";

const baseDomainConfig = [
  { id: "tech", name: "Tech" },
  { id: "ml-android", name: "ML & Android" },
  { id: "design", name: "Design" },
  { id: "content", name: "Content" },
  { id: "community", name: "Community" },
];

const DomainSideNav = ({ teamSlug }) => {
  const [mounted, setMounted] = useState(false);
  const [activeDomain, setActiveDomain] = useState(null);
  const year = getYearFromSlug(teamSlug);
  const domainColors = getDomainColorsByYear(year);
  
  // Get domain config with year-specific colors
  const domainConfig = baseDomainConfig.map(domain => ({
    ...domain,
    color: domainColors[domain.id]?.color || "#4285F4"
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = domainConfig.map((domain) => ({
        id: domain.id,
        element: document.getElementById(`domain-${domain.id}`),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveDomain(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (domainId) => {
    const element = document.getElementById(`domain-${domainId}`);
    if (element) {
      const offset = 100; // Offset for sticky header if any
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!mounted) return null;

  return (
    <DomainSideNavContainer
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {domainConfig.map((domain, index) => (
        <motion.div
          key={domain.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 + index * 0.1 }}
        >
          <DomainNavButton
            onClick={() => handleNavigation(domain.id)}
            backgroundColor={domain.color}
            isActive={activeDomain === domain.id}
            type="button"
          >
            {domain.name}
          </DomainNavButton>
        </motion.div>
      ))}
    </DomainSideNavContainer>
  );
};

export default DomainSideNav;

