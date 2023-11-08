import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from '@/components';
import { Accounts } from '@/icons';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="relative z-10">
      <SectionHeader
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            I&apos;m a <span className="text-about_me_green">fullstack developer</span> specialized on <span className="text-about_me_green">Web Applications</span>
          </div>
        }
      />
      <Stars id="about-me" />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Larry Neil Mcgowen</h3>
            <p className="text-base leading-7 text-about_me_green">Full-stack Web Developer</p>
            <p className="max-w-3xl">Highly skilled and dedicated Senior Fullstack Engineer with 10 years of extensive web development experience. Proven ability
to collaborate effectively with agile teams, leading projects to successful completion. Adept at mentoring and guiding junior
developers, fostering a culture of continuous learning and growth. Committed to staying up-to-date with the latest technologies
and trends, consistently delivering innovative solutions. Strong problem-solving and communication skills, with a keen eye for
detail. Excels in fast-paced, dynamic environments, delivering high-quality results on time</p>
          </div>
          <div className="flex-none mx-auto">
            <Image className="rounded-full object-cover" src="/me.png" alt="" height={208} width={208} />
          </div>
        </div>
        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div>
              <Socials />
            </div>
            <FadeIn
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <GlowCard className="hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <Image className="rounded-2xl object-fill" src="/tec.png" alt="" width={144} height={144} />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">B.S. in Computer Science</h3>
                    <p className="text-base leading-7 text-about_me_green">Northern Arizona University</p>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
