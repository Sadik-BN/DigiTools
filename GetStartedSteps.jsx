const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    img: "",
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    img: "",
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    img: "",
  },
];

export default function GetStartedSteps() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-400 text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm"
          >
            <span className="absolute top-4 right-4 bg-violet-600 text-white text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center">
              {step.id}
            </span>

            <div className="bg-violet-100 rounded-full w-24 h-24 flex items-center justify-center mb-6 overflow-hidden">
              {step.img ? (
                <img src={step.img} alt={step.title} className="w-12 h-12 object-contain" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-violet-200" />
              )}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
