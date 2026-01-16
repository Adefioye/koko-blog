interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Old projects',
    description: `Portfolio of projects in web application and data engineering I created before the era of vibecoding.`,
    imgSrc: '/static/images/apps-portfolio.png',
    href: 'https://adefioye-portfolio.netlify.app/',
  },
  {
    title: 'KokoSky Weather API',
    description: `APIs for retrieving location, real weather data, daily and hourly forecasts using Java, Springboot, Docker, and OpenAPI specification`,
    imgSrc: '/static/images/weather-image.jpeg',
    href: 'https://github.com/Adefioye/WeatherService',
  },
  {
    title: 'Cute Places App',
    description: `A fully featured CRUD application for allowing authenticated users to create, edit, delete, comment and like cute places in Nigeria. Implemented pagination, authentication, filtering using tags, sign-in and sign-out feature, desktop and mobile responsiveness using React, Redux, React-Google-Login, Node, Expressjs and MongoDB`,
    imgSrc: '/static/images/cute-place-app.png',
    href: 'https://tiny-gaufre-f55cd2.netlify.app/places',
  },
  {
    title: 'Koko Notes App',
    description: `CRUD application for allowing users to create, edit, and delete notes. Implemented a complex form for editing and deleting note images using React-hook-form, Nextjs and Typescript. Improved search for users by 850% for 15000 users using indexing.`,
    imgSrc: '/static/images/koko-notes-app.png',
    href: 'https://koko-notes.vercel.app/users',
  },
]

export default projectsData
