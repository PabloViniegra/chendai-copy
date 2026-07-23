import { AwardsSection } from "@/components/awards-section";
import { BlogSection } from "@/components/blog-section";
import { BookmarksSection } from "@/components/bookmarks-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ComponentsSection } from "@/components/components-section";
import { ContributionsGraph } from "@/components/contributions-graph";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { HelloSection } from "@/components/hello-section";
import { Hero } from "@/components/hero";
import { InsightsSection } from "@/components/insights-section";
import { LinedSection } from "@/components/lined-section";
import { OverviewSection } from "@/components/overview-section";
import { ProjectsSection } from "@/components/projects-section";
import { Separator } from "@/components/separator";
import { SocialLinks } from "@/components/social-links";
import { SponsorsSection } from "@/components/sponsors-section";
import { StackSection } from "@/components/stack-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <main className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto w-full max-w-3xl pb-24">
        <Hero />
        <Separator />
        <OverviewSection />
        <section
          aria-label="Social links"
          className="screen-line-top screen-line-bottom border-x border-line p-4"
        >
          <SocialLinks />
        </section>
        <ContributionsGraph />
        <Separator />
        <HelloSection />
        <Separator />
        <TestimonialsSection />
        <Separator />
        <ComponentsSection />
        <Separator />
        <BlogSection />
        <Separator />
        <LinedSection id="stack" title="Stack">
          <StackSection />
        </LinedSection>
        <Separator />
        <LinedSection id="experience" title="Experience">
          <ExperienceSection />
        </LinedSection>
        <Separator />
        <LinedSection id="education" title="Education">
          <EducationSection />
        </LinedSection>
        <Separator />
        <ProjectsSection />
        <Separator />
        <AwardsSection />
        <Separator />
        <CertificationsSection />
        <Separator />
        <BookmarksSection />
        <Separator />
        <InsightsSection />
        <Separator />
        <SponsorsSection />
      </div>
    </main>
  );
}
