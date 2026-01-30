import Image from 'next/image'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { Pill } from '@/components/Pill'

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCompass() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-zinc-900/70 bg-zinc-950/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="#top" className="font-semibold tracking-tight">
              Curate Your Life
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
              <a className="hover:text-white" href="#why">Why it works</a>
              <a className="hover:text-white" href="#for">Who it’s for</a>
              <a className="hover:text-white" href="#not">What it is / isn’t</a>
              <a className="hover:text-white" href="#contact">Start</a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm hover:opacity-90"
            >
              DM to start
            </a>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <header id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tower-1.jpeg"
            alt="City tower at night"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-zinc-950" />
        </div>

        <Container>
          <div className="relative py-16 sm:py-24">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <Pill>Mindset • Opportunity • Systems</Pill>
                <Pill>Long-term financial growth</Pill>
                <Pill>Clarity over hype</Pill>
              </div>

              <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
                Curate Your <span className="text-zinc-200">Growth Journey</span>
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-zinc-200/90 leading-relaxed">
                To curate your life, we believe mindset is the foundation of success — and opportunity is the gateway to transformation.
                We inspire individuals to unlock their potential and build the life they dream of, one confident step at a time.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-zinc-950 shadow-sm hover:opacity-90"
                >
                  Ready to begin • DM to start
                </a>
                <a
                  href="#why"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/30 px-6 py-3 text-base font-semibold text-white hover:bg-zinc-900/50"
                >
                  Learn how it works
                </a>
              </div>

              <p className="mt-6 text-sm text-zinc-400">
                Because financial growth should be planned, not rushed. A practical path to financial growth beyond salary.
              </p>
            </div>

            {/* subtle glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full gradient-ring blur-2xl" />
          </div>
        </Container>
      </header>

      {/* Gallery */}
      <section className="py-10 sm:py-14 border-t border-zinc-900">
        <Container>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
              <Image
                src="/images/tower-2.jpeg"
                alt="Portrait in front of tower"
                width={900}
                height={1200}
                className="h-full w-full object-cover opacity-95"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
              <Image
                src="/images/tower-3.jpeg"
                alt="Portrait in front of tower (alt)"
                width={900}
                height={1200}
                className="h-full w-full object-cover opacity-95"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
              <Image
                src="/images/cave-1.jpeg"
                alt="Looking up at nature"
                width={900}
                height={1200}
                className="h-full w-full object-cover opacity-95"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Core positioning */}
      <Container>
        <Section
          eyebrow="Positioning"
          title="Smart income systems for people who think long-term"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="The belief" icon={<IconCompass />}>
              Freedom begins when income is no longer limited to one source.
              <div className="mt-3">
                Because quitting your job is not the only way to grow.
              </div>
            </Card>
            <Card title="The approach" icon={<IconCompass />}>
              This is education-first, system-driven, and relationship-based.
              <div className="mt-3">Income becomes a byproduct of alignment — not pressure.</div>
            </Card>
          </div>
        </Section>

        {/* Who it's for */}
        <Section id="for" eyebrow="Who is this suitable for?" title="Clarity, consistency, and long-term thinking">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card title="Professionals">
              People who want part-time or parallel income without quitting mainstream work.
            </Card>
            <Card title="Teachable learners">
              People who value education over hype and are open to learning.
            </Card>
            <Card title="Lifestyle & growth focused">
              Individuals interested in wellness, lifestyle, or personal development.
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-lg font-semibold">You don’t need sales experience.</p>
            <p className="mt-2 text-zinc-200/85">
              You need clarity and consistency. Income comes naturally when trust is built.
              People don’t follow money — money follows value.
            </p>
          </div>
        </Section>

        {/* Support & Structure */}
        <Section eyebrow="Support & Structure" title="You are not left alone">
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Training is provided" icon={<IconCheck />}>
              Step-by-step guidance exists, and learning resources are available.
            </Card>
            <Card title="Grow at your own pace" icon={<IconCheck />}>
              This is community-driven — not individual pressure.
            </Card>
          </div>
        </Section>

        {/* What it is / isn't */}
        <Section id="not" eyebrow="Very important" title="This is not a pitch. It’s a perspective.">
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="This is NOT" icon={<IconX />}>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="mt-0.5"><IconX /></span><span>Door-to-door sales</span></li>
                <li className="flex gap-2"><span className="mt-0.5"><IconX /></span><span>Cold calling</span></li>
                <li className="flex gap-2"><span className="mt-0.5"><IconX /></span><span>Quick money scheme</span></li>
                <li className="flex gap-2"><span className="mt-0.5"><IconX /></span><span>Overnight success promise</span></li>
              </ul>
            </Card>

            <Card title="This IS" icon={<IconCheck />}>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="mt-0.5"><IconCheck /></span><span>System and education-driven</span></li>
                <li className="flex gap-2"><span className="mt-0.5"><IconCheck /></span><span>Relationship-based</span></li>
                <li className="flex gap-2"><span className="mt-0.5"><IconCheck /></span><span>Long-term oriented</span></li>
                <li className="flex gap-2"><span className="mt-0.5"><IconCheck /></span><span>New-age digitally driven</span></li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Why it works */}
        <Section id="why" eyebrow="Why it works" title="Because trust compounds when pressure disappears">
          <div className="grid gap-6 lg:grid-cols-4">
            <Card title="People trust people">
              Not advertisements.
            </Card>
            <Card title="Quality needs clarity">
              Not hype.
            </Card>
            <Card title="Income follows alignment">
              It becomes a byproduct.
            </Card>
            <Card title="Learning comes first">
              Those who succeed focus on understanding.
            </Card>
          </div>
        </Section>

        {/* Authority / Philosophy */}
        <Section eyebrow="Curate Your Life" title="High-value decisions are not made under pressure">
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Positioning statement">
              Curate Your Life is not a sales platform. It is a perspective on how people choose quality — in lifestyle, in systems, and in decisions.
            </Card>
            <Card title="Observation">
              People don’t avoid opportunities. They avoid being rushed into them.
              When urgency is removed, better decisions naturally follow.
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-lg font-semibold">What we believe</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              <li className="flex gap-2"><span className="mt-0.5"><IconCheck /></span><span>Education comes before action</span></li>
              <li className="flex gap-2"><span className="mt-0.5"><IconCheck /></span><span>Choice matters more than persuasion</span></li>
              <li className="flex gap-2"><span className="mt-0.5"><IconCheck /></span><span>Trust compounds when pressure disappears</span></li>
              <li className="flex gap-2"><span className="mt-0.5"><IconCheck /></span><span>Nothing is designed to convince — everything is designed to inform</span></li>
            </ul>
          </div>
        </Section>

        {/* Final thought */}
        <Section eyebrow="Final thought" title="When value is real, income is inevitable">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
            <p className="text-zinc-200/90 leading-relaxed">
              This opportunity is not for everyone — and that’s a good thing.
              If this way of earning resonates with you, start by learning — not by selling.
            </p>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Start your journey" title="Ready to elevate and curate your life?">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card title="Step 1">
              Send a DM with the message: <span className="font-semibold">“Curate”</span>
            </Card>
            <Card title="Step 2">
              Get the information with clarity and without pressure.
            </Card>
            <Card title="Step 3">
              Decide at your own pace — your intent is respected.
            </Card>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-zinc-950 shadow-sm hover:opacity-90"
              href="mailto:hello@curateyourlife.com?subject=Curate%20Your%20Growth%20Journey&body=Hi%2C%20I%27d%20like%20to%20start%20my%20journey.%20Message%3A%20Curate"
            >
              Email to start
            </a>
            <a
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/30 px-6 py-3 text-base font-semibold text-white hover:bg-zinc-900/50"
              href="#top"
            >
              Back to top
            </a>
          </div>

          <p className="mt-4 text-sm text-zinc-400">
            Replace the email link with your Instagram / WhatsApp DM link when you publish.
          </p>
        </Section>
      </Container>

      <footer className="border-t border-zinc-900 py-10">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Curate Your Life. All rights reserved.
            </p>
            <p className="text-sm text-zinc-500">
              Clarity over persuasion • Long-term over noise
            </p>
          </div>
        </Container>
      </footer>
    </main>
  )
}
