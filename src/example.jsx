import uniqid from "uniqid";

const example = {
  personalInfo: {
    fullName: "Josephine Meyers",
    email: "josephine.meyers@mail.co.uk",
    phone: "+44 3245 5521 5521",
    address: "London, UK",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Economics",
        school: "London City University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Master's Degree in Math",
        school: "Hidden University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        company: "Umbrella Inc.",
        position: "UX & UI Designer",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        company: "Black Mesa Labs",
        position: "UX Research Assistant",
        location: "Berlin, Germany",
        startDate: "04/2018",
        endDate: "02/2019",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],

    projects: [
      {
        name: "Smart Budget Planner",
        description:
          "Developed a responsive web application to help users manage monthly expenses and visualize spending patterns using interactive charts.",
        technologies: ["React", "Chart.js", "CSS"],
        startDate: "01/2023",
        endDate: "04/2023",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        name: "WeatherCast App",
        description:
          "Built a weather forecast app that uses OpenWeatherMap API to display real-time weather data based on user's location.",
        technologies: ["JavaScript", "HTML", "API"],
        startDate: "06/2022",
        endDate: "08/2022",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default example;
