'use client';

export function CompaniesSection() {
  const companies = [
    { name: 'Vodafone', initial: 'V' },
    { name: 'Intel', initial: 'I' },
    { name: 'Tesla', initial: 'T' },
    { name: 'AMD', initial: 'A' },
    { name: 'Talkit', initial: 'T' },
  ];

  return (
    <section className="bg-background py-8 sm:py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground font-medium mb-8">
          Companies we helped grow
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center font-semibold text-xs">
                {company.initial}
              </div>
              <span className="font-semibold text-sm sm:text-base">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
