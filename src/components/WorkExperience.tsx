import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'David Zwirner • Contract | Full stack engineer',
    date: 'Nov 2020 – Apr 2023 • 2 yrs 5 mos',
    technologies: 'Next.js • TypeScript • Sanity • GraphQL • Storybook',
    description: [
      'Led the development of a mono-repo project using the Next.js framework, integrating with Sanity Studio, resulting in a modern and performant website',
      'Managed the deployment of the development and staging versions of the site using Vercel, ensuring efficient and reliable deployment processes.',
      'Implemented robust CI/CD pipelines between GitHub and Vercel, ensuring seamless integration and continuous deployment of the project',
      'Developed and executed comprehensive Playwright tests to validate code changes and prevent unverified code from merging into the main branch on GitHub',
      'Collaborated on a mono-repo project consisting of three sub-projects: web (main project), design-system, and sanity-studio, ensuring efficient collaboration and code sharing across the project',
      'Developed and tested main components using Storybook, ensuring optimal functionality and a seamless user experience',
      'Utilized Groq and GraphQL to efficiently pull data from the Sanity Studio, enabling effective data management and retrieval',
      'Ensured consistent styling and code quality across the project by utilizing Tailwind CSS, Husky, Prettier, and ESLint',
    ],
    image: { url: '/work/dz.png', height: 150, width: 150, className: '' },
  },
  {
    title: 'Alpine Home Air • Full-time | Frontend engineer | Full stack engineer',
    date: 'Aug 2018 – Apr 2020 • 1 yr 8 mos',
    technologies:'React • TypeScript • Express (express.js) • jQuery • Bootstrap',
    description: [
      'Contributed to a mono-repo project consisting of four sub-projects: Alpine-after, Alpine-api, Alpine-client, and Alpine-partnernet. Took responsibility for the development of the Alpine-client project',
      'Built the project using jQuery, Bootstrap, TypeScript, and React.js, resulting in a modern and responsive user interface',
      'Implemented CircleCI for continuous integration and development, streamlining the build and deployment process',
      'Utilized Husky, Prettier, and Jest for code quality and testing, ensuring high-quality and error-free functionality',
      'Utilized Babel, Redux, Styled Components, Tailwind CSS, Crypto, Bootstrap, Google Maps, and other dependencies, resulting in a robust and efficient development environment'
    ],
    image: { url: '/work/alpine.jpeg', height: 150, width: 150, className: '' },
  },
  {
    title: 'ThoughtBack • Part-time | Frontend Engineer',
    date: 'Aug 2016 – Mar 2018 • 1 yr 7 mos',
    technologies: 'JavaScript • TypeScript • Next.js • Firebase • Tailwindcss',
    description: [
      'Developed a project using Next.js as the primary framework, providing a robust and efficient development environment',
      'Utilized Firebase as a real-time backend service platform, enabling seamless data management and synchronization',
      'Implemented Tailwind CSS as the style framework for the project, resulting in a modern and responsive user interface',
      'Employed ESLint and Prettier to ensure code quality and formatting, resulting in maintainable and scalable code',
      'Implemented Cypress for end-to-end testing of the project, ensuring high-quality and error-free functionality',
    ],
    image: { url: '/work/thoughtback.png', height: 50, width: 196, className: 'bg-white' },
  },
  {
    title: 'Kotto LLC • Full-time | Frontend engineer | Lead developer',
    date: 'Nov 2012 – May 2016 • 3 yrs 6 mos',
    technologies: 'JavaScript • React • TypeScript • PostgreSQL • Docker',
    description: [
      'Designed and integrated a blog posting system on k8s hubs that allowed users to post messages, images, and videos, as well as like, unlike, and comment on posts',
      'Implemented live chat functionality using socket.io, enabling users to engage in both personal and group chats',
      'Translated Figma designs into pixel-perfect, cross-browser responsive web pages, ensuring a seamless user experience across all devices',
      'Utilized Flux/Redux pattern to effectively manage application states, improving overall performance and stability',
      'Employed Redux Saga to manage global actions within the application, streamlining the development process',
      'Leveraged TypeScript and ESLint to ensure code quality and maintainability',
      'Integrated CI/CD on both GitHub and k8s hubs (public or private), automating the build and deployment process for increased efficiency',
      'Utilized Docker, Kubernetes cluster, AWS Minio & AWS S3 bucket to manage asset files, resulting in improved performance and faster load times',
      'Lead the team last year',
    ],
    image: { url: '/work/koto.png', height: 72, width: 174, className: 'bg-white' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            <p className="text-lg leading-7 text-about_me_green mb-3"><b>Technologies: </b>{item.technologies}</p>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
