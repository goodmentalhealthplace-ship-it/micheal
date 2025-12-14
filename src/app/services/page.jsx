{/* ================= 2. SERVICES INTRO ================= */}
<section className="max-w-7xl mx-auto px-6 lg:px-16 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">

    {/* IMAGE LEFT */}
    <div className="relative w-full h-[300px] md:h-[420px] rounded-[32px] overflow-hidden">
      <Image
        src="/services.png"
        alt="Mental health services overview"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* TEXT RIGHT */}
    <div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 mb-6 tracking-tight">
        Mental Health Care Designed Around You
      </h2>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mb-6">
        We provide thoughtful, evidence-based mental health services that focus
        on understanding you as a whole person — not just symptoms. Every service
        we offer is designed to meet you where you are and support lasting
        emotional stability.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
        Whether you are seeking clarity through evaluation, balance through
        medication, healing through therapy, or flexibility through virtual care,
        our approach remains compassionate, collaborative, and personalized.
      </p>
    </div>
  </div>

  {/* ================= CLEAN SERVICE LIST ================= */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {servicesData.map((service) => (
      <div
        key={service.slug}
        className="p-8 rounded-[28px] border border-gray-100 bg-white shadow-sm hover:shadow-md transition"
      >
        <div className="flex items-start gap-4 mb-4">
          <service.icon size={34} style={{ color: service.color }} />
          <h3 className="text-2xl font-bold text-gray-950">
            {service.title}
          </h3>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="space-y-3 mb-6">
          {service.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <FaCheckCircle
                size={16}
                className="mt-1 flex-shrink-0"
                style={{ color: service.color }}
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/${service.slug}`}
          style={{ backgroundColor: service.color }}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white transition hover:opacity-90"
        >
          Learn More
        </Link>
      </div>
    ))}
  </div>
</section>
