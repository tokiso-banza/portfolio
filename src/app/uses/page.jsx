import UsesHeader from "@/components/UsesHeader/UsesHeader";
import UsesSection from "@/components/UsesComponent/UseSection/UsesSection";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
  const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};
const items = [
  {
    groupName: "Workstation",
    items: [
      {
        title: "16” MacBook Pro, M4 (2024)",
        description:
          "I use a MacBook Pro (M4, 32GB RAM) for my daily work. It handles Python, SQL, JavaScript, and data-heavy tasks effortlessly while staying cool and quiet.",
      },
      {
        title: "Dell UltraSharp U2723QE",
        description:
          "A high-resolution external monitor that enhances my workflow, providing extra screen space for coding, debugging, and data visualization.",
      },
      {
        title: "Keychron K2",
        description:
          "I’ve been using this keyboard for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.",
      },
      {
        title: "Logitech MX Master 3",
        description:
          "I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.",
      },
      {
        title: "Sony WH-1000XM4",
        description:
          "For deep focus and concentration, noise-canceling headphones are a must. The Sony WH-1000XM4 delivers clear sound and comfort for long hours.",
      },
      {
        title: "Rain Design mStand",
        description:
          "I’ve been using this stand for my MacBook Pro for a few years now and it’s great. It’s sturdy, looks good, and keeps my laptop cool.",
      },
    ],
  },
  {
    groupName: "Development",
    items: [
      {
        title: "Visual Studio Code",
        description:
          "My go-to code editor, offering great extensions, fast performance, and customization for Python, Java, and JavaScript development.",
      },
      {
        title: "iTerm2 + Oh My Zsh",
        description:
          "For terminal work, I use iTerm2 with Oh My Zsh, which enhances productivity with custom themes, aliases, and plugins.",
      },
      {
        title: "GitHub",
        description:
          "Version control is essential. I use GitHub to manage projects, collaborate, and track code changes.",
      },
      {
        title: "PostgreSQL + pgAdmin4",
        description:
          "For database management, I work with PostgreSQL and pgAdmin4 to handle data storage, queries, and optimization.",
      },
    ],
  },
  {
    groupName: "Design",
    items: [
      {
        title: "Figma",
        description:
          "For UI/UX design and visualizing ideas, Figma is my go-to for wireframing and prototyping.",
      },
      {
        title: "Whimsical",
        description:
          "A great tool for flowcharts, system diagrams, and brainstorming.",
      },
    ],
  },
  {
    groupName: "Productivity",
    items: [
      {
        title: "Notion",
        description:
          "I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.",
      },
      {
        title: "Alfred",
        description:
          "I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.",
      },
      {
        title: "Google Sheets + Apps Script",
        description:
          "For automation and data tracking, I integrate Google Sheets with Apps Script to automate repetitive tasks.",
      },
    ],
  },
];
export default function Uses() {
  return (
    <div>
      <Navbar
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />
      <UsesHeader
        title="Software I use, gadgets I love, and other things I recommend."
        content = "Welcome to my digital space! As a software engineer and data scientist, I rely on a carefully selected set of tools and gadgets to optimize productivity and streamline development. Whether I’m building automation tools, developing applications, or managing data, I prioritize efficiency, flexibility, and performance.From Visual Studio Code for development and Notion for organization to Google Sheets for automation, my workflow is built around speed, collaboration, and adaptability. My workstation, featuring a MacBook Pro M4, external monitors, and a mechanical keyboard, ensures seamless multitasking."
      />
      <UsesSection items={items} />
      <div className="footerBar">
          <Footer
            options={[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/uses", label: "Uses" },
            ]}
          />
    </div>
    </div>
  );
}
