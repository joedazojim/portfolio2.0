export const profile = {
  name: "Your Name",
  role: "Junior Software Developer",
  location: "Open to remote and local roles",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  resume: "#",
  summary:
    "I build responsive web applications with React, JavaScript, and clean UI patterns. I enjoy turning real-world problems into practical, maintainable software.",
};

export const projects = [
  {
    title: "Task Manager App",
    description:
      "A focused productivity app for creating tasks, filtering work, and tracking completion across a responsive interface.",
    stack: ["React", "Tailwind CSS", "Local Storage"],
    highlights: [
      "Built reusable components for forms, filters, and task cards.",
      "Persisted task state locally and handled empty/loading UI states.",
      "Designed a mobile-first layout with keyboard-friendly controls.",
    ],
    liveUrl: "#",
    codeUrl: "#",
    accent: "from-emerald-400 to-teal-600",
  },
  {
    title: "Weather Dashboard",
    description:
      "A dashboard that searches cities, displays current conditions, and presents weather data in a readable daily summary.",
    stack: ["JavaScript", "API Integration", "CSS"],
    highlights: [
      "Fetched and transformed API data for clear user-facing cards.",
      "Handled missing data and request errors with helpful UI feedback.",
      "Practiced accessible contrast, spacing, and responsive states.",
    ],
    liveUrl: "#",
    codeUrl: "#",
    accent: "from-sky-400 to-blue-600",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal website that presents projects, skills, and contact details for software developer applications.",
    stack: ["React", "Tailwind CSS", "Vite"],
    highlights: [
      "Organized portfolio content into reusable data-driven sections.",
      "Created polished project cards with clear demo and code actions.",
      "Optimized the layout for recruiters scanning on desktop or mobile.",
    ],
    liveUrl: "#",
    codeUrl: "#",
    accent: "from-amber-300 to-orange-500",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "SQL Basics"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vite", "VS Code", "Responsive Design"],
  },
];
