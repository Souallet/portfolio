import SectionTitle from '@/components/templates/SectionTitle';

export default function ContactSection() {
  return (
    <section className="mb-10 p-5 flex flex-col items-center text-center">
      <SectionTitle>{`Restons en contact`}</SectionTitle>
      <p className="mb-8 opacity-50 text-lg md:text-md lg:text-xl xl:text-2xl">
        {`Une idée en tête ? Parlons en !`}
      </p>
      <a
        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        href="mailto:sebastien.ouallet@gmail.com"
      >
        Envoyez-moi un mail !
      </a>
    </section>
  );
}
