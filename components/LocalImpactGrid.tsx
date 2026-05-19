type ProjectTile = {
  city: string;
  caption: string;
  /** Once CompanyCam photos are wired in, swap placeholder to a real URL. */
  imageUrl?: string;
};

const projects: ProjectTile[] = [
  {
    city: 'Meridian, ID',
    caption: 'Full tear-off & replacement after April hail event',
  },
  {
    city: 'Nampa, ID',
    caption: '3-tab to architectural upgrade, insurance-covered',
  },
  {
    city: 'Caldwell, ID',
    caption: 'Wind damage repair, completed in 1 day',
  },
  {
    city: 'Boise, ID',
    caption: 'Storm-damage claim, $0 out-of-pocket beyond deductible',
  },
];

export function LocalImpactGrid() {
  return (
    <section className="bg-[#fafaf9] pt-4 pb-12 sm:pt-6 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">
            Recently completed
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-black md:text-3xl">
            Roofs We&apos;ve Replaced in Your Neighborhood
          </h2>
          <p className="mt-2 text-sm text-brand-gray md:text-base">
            Real homes, real claims, real Treasure Valley families.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.city + p.caption} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ city, caption, imageUrl }: ProjectTile) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-brand-gray-light/40">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-gray-light/30">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={`Roof project in ${city}`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <PlaceholderRoofMark />
        )}
      </div>
      <div className="px-3 py-2.5 md:px-4 md:py-3">
        <p className="text-xs font-bold text-brand-red md:text-sm">{city}</p>
        <p className="mt-0.5 text-xs leading-snug text-brand-black md:text-sm">
          {caption}
        </p>
      </div>
    </article>
  );
}

function PlaceholderRoofMark() {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      aria-label="CompanyCam photo placeholder"
    >
      <svg
        viewBox="0 0 100 75"
        className="h-1/2 w-1/2 text-brand-gray opacity-50"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5 50 L20 25 L30 40 L45 15 L55 35 L70 20 L85 45 L95 50 L95 70 L5 70 Z" />
      </svg>
    </div>
  );
}

export default LocalImpactGrid;
