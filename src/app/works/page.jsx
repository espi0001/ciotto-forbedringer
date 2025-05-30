export const dynamic = "force-dynamic";
import { getAll } from "@/utils/supabase/api";
import TitleSection from "@/components/Sections/TitleSection";
import WorkCard from "@/components/WorksDetails/WorkCard";
import Button from "@/components/UI/Button";

const isLargeCard = (index) => [1, 2, 5, 6].includes(index); // Husk 0-indeks!

export const metadata = {
  title: "Ciotto | Works",
  description: "Works of Ari Prasetya",
};

export default async function Works() {
  const works = await getAll("works");

  return (
    <section className="px-section max-w-screen-2xl mx-auto ">
      <article className="flex flex-col gap-8">
        <TitleSection title="Works" description="Explore a selection of Ari’s previous collaborations. Ari’s work spans homes, restaurants, hotels and more — each piece shaped through close collaboration and thoughtful design. Browse the works — and reach out to start your own project together." />

        <Button withCopy delayVariant={1.5} variant="primary" link="/contact">
          Contact for inquiries
        </Button>
      </article>

      <article className="mt-10 md:mt-28 grid grid-cols-2 gap-y-10 gap-x-6 md:gap-x-20 lg:gap-x-30 mb-48">
        {works.map((work, index) => (
          <WorkCard
            key={work.id} //
            image={work.heroimage}
            title={work.name}
            number={index + 1}
            link={`/works/${work.slug}`}
            size={isLargeCard(index) ? "big" : "small"}
          />
        ))}
      </article>
    </section>
  );
}
