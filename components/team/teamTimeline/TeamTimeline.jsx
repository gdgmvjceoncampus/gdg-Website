import React from "react";
import {
  TeamImageContainer,
  TeamTimelineCardContainer,
  TeamTimelineContainer,
  ViewTeamButton
} from "./TeamTimeline.styled";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Typography from "@/components/display/typography/Typography";
import Image from "next/image";
import Link from "next/link";
import GroupIcon from "@mui/icons-material/Group";

const TeamTimeline = () => {
  return (
    <TeamTimelineContainer>
      <div className="header">
        <Typography variant="displayLarge">GDG Timeline</Typography>
        <Typography variant="body">From Inception to Innovation</Typography>
      </div>

      <VerticalTimeline lineColor="#D6D6D660">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255,255,255,0.6)",
            boxShadow: "0px 0px 20px -2px rgba(0, 0, 0, 0.16)"
          }}
          contentArrowStyle={{ borderRight: "7px solid  #4285F4" }}
          dateClassName="date"
          date="2025 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GroupIcon />}
        >
          <TeamTimelineCardContainer>
            <TeamImageContainer>
              <Image
                src="/images/team-2025.png"
                fill={"responsive"}
                alt="Team 2025"
                style={{ objectFit: "cover" }}
              />
            </TeamImageContainer>
            <Typography variant="h4">Team 2025</Typography>

            <ul>
              <li>
                Continuing to drive innovation and community engagement in the
                tech space.
              </li>
              <li>
                Expanding our reach with cutting-edge workshops and collaborative
                projects.
              </li>
              <li>
                Building on the foundation laid by previous teams to create an
                even more vibrant developer community.
              </li>
            </ul>
            <Link
              href="/team/2025"
              style={{
                textDecoration: "none",
                width: "100%"
              }}
            >
              <ViewTeamButton>View Team</ViewTeamButton>
            </Link>
          </TeamTimelineCardContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255,255,255,0.6)",
            boxShadow: "0px 0px 20px -2px rgba(0, 0, 0, 0.16)"
          }}
          contentArrowStyle={{ borderRight: "7px solid  #4285F4" }}
          dateClassName="date"
          date="2024 - 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GroupIcon />}
        >
          <TeamTimelineCardContainer>
            <TeamImageContainer>
              <Image
                src="/images/team-2024.png"
                fill={"responsive"}
                alt="Team 2024"
                style={{ objectFit: "cover" }}
              />
            </TeamImageContainer>
            <Typography variant="h4">Team 2024</Typography>

            <ul>
              <li>
                Furthered the mission of GDSC MVJCE with innovative events and
                community initiatives.
              </li>
              <li>
                Strengthened partnerships and expanded the club&apos;s impact
                across the campus.
              </li>
              <li>
                Organized successful hackathons and tech talks, inspiring the
                next generation of developers.
              </li>
            </ul>
            <Link
              href="/team/2024"
              style={{
                textDecoration: "none",
                width: "100%"
              }}
            >
              <ViewTeamButton>View Team</ViewTeamButton>
            </Link>
          </TeamTimelineCardContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255,255,255,0.6)",
            boxShadow: "0px 0px 20px -2px rgba(0, 0, 0, 0.16)"
          }}
          contentArrowStyle={{ borderRight: "7px solid  #4285F4" }}
          dateClassName="date"
          date="2023 - 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GroupIcon />}
        >
          <TeamTimelineCardContainer>
            <TeamImageContainer>
              <Image
                src="/images/team-2023.png"
                fill={"responsive"}
                alt="Team 2023"
                style={{ objectFit: "cover" }}
              />
            </TeamImageContainer>
            <Typography variant="h4">Team 2023</Typography>

            <ul>
              <li>
                Led the creation and launch of the new GDSC MVJCE website, a
                dynamic hub for tech enthusiasts.
              </li>
              <li>
                Introduced a Machine Learning Team, enabling exploration of AI
                and its applications.
              </li>
              <li>
                Preparing to host enriching workshops, coding sessions, and
                more.
              </li>
            </ul>
            <Link
              href="/team/2023"
              style={{
                textDecoration: "none",
                width: "100%"
              }}
            >
              <ViewTeamButton>View Team</ViewTeamButton>
            </Link>
          </TeamTimelineCardContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255,255,255,0.6)",
            boxShadow: "0px 0px 20px -2px rgba(0, 0, 0, 0.16)"
          }}
          contentArrowStyle={{ borderRight: "7px solid  #4285F4" }}
          dateClassName="date"
          date="2022 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GroupIcon />}
        >
          <TeamTimelineCardContainer>
            <TeamImageContainer>
              <Image
                src="/images/team-2022.jpg"
                fill={"responsive"}
                alt="Team 2023"
                style={{ objectFit: "cover" }}
              />
            </TeamImageContainer>
            <Typography variant="h4">Team 2022</Typography>
            <ul>
              <li>
                Successfully hosted engaging workshops including Web3, Web
                Development, and Flutter.
              </li>
              <li>
                Innovatively extended activities to offline events, enhancing
                community interaction.
              </li>
            </ul>
            <Link
              href="/team/2022"
              style={{
                textDecoration: "none",
                width: "100%"
              }}
            >
              <ViewTeamButton>View Team</ViewTeamButton>
            </Link>
          </TeamTimelineCardContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255,255,255,0.6)",
            boxShadow: "0px 0px 20px -2px rgba(0, 0, 0, 0.16)"
          }}
          contentArrowStyle={{ borderRight: "7px solid  #4285F4" }}
          dateClassName="date"
          date="2021 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GroupIcon />}
        >
          <TeamTimelineCardContainer>
            <TeamImageContainer>
              <Image
                src="/images/team-2021.jpg"
                fill={"responsive"}
                alt="Team 2023"
                style={{ objectFit: "cover" }}
              />
            </TeamImageContainer>
            <Typography variant="h4">Team 2021</Typography>
            <ul>
              <li>
                Pioneered GDSC MVJCE&apos;s inception, bringing the club to the
                college community.
              </li>
              <li>
                Organized a series of impactful online workshops covering topics
                like Flutter and Firebase.
              </li>
            </ul>
            <Link
              href="/team/2021"
              style={{
                textDecoration: "none",
                width: "100%"
              }}
            >
              <ViewTeamButton>View Team</ViewTeamButton>
            </Link>
          </TeamTimelineCardContainer>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TeamTimelineContainer>
  );
};

export default TeamTimeline;
