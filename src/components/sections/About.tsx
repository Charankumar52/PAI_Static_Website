import FadeUp from "@/components/ui/FadeUp";

export default function About() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="font-roboto-slab text-2xl sm:text-3xl md:text-4xl font-bold text-pai-navy mb-6">
            National Sports Association of Paragliding in India
          </h2>
          <div className="w-16 h-1 bg-pai-sky mx-auto mb-8 rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The Paragliding Association of India (PAI), formed in{" "}
            <strong className="text-gray-800">2010</strong> and registered in Goa
            under the Societies Registration Act, 1860, is an organisation{" "}
            <strong className="text-pai-navy">
              of pilots… by pilots… for pilots
            </strong>
            . Built on a shared vision to strengthen and structure the sport
            nationwide, PAI promotes{" "}
            <em className="text-gray-700">safe flying</em>,{" "}
            <em className="text-gray-700">skill development</em>, and a{" "}
            <em className="text-gray-700">unified rating framework</em> for
            pilots. With a strong emphasis on community, safety, and responsible
            growth, PAI continues to support and guide India&apos;s paragliding
            fraternity through a dedicated network of committees, instructors, and
            volunteers.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
