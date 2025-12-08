"use client";

export default function FindUsSection() {
  return (
    <section className="w-full py-10 md:py-20 flex justify-center px-4 bg-white">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Find Us</h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          You can use the interactive map below to get directions, explore nearby areas, or plan
          your visit. We &apos;re always happy to welcome you!
        </p>

        {/* Map Container */}
        <div className="w-full h-[400px] md:h-[500px] rounded-xl shadow-lg overflow-hidden bg-gray-100">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d397.0858669775672!2d38.790227884394675!3d8.994608437770454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ad7300686d%3A0x2b4352162d88f038!2sAbyssinia%20Plaza!5e0!3m2!1sen!2sus!4v1764832435461!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
