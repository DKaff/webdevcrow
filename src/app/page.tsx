export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <section className="space-y-2">
          <a href="https://webdevcrow.com">Go to Static Site</a>
          <h1 className="text-4xl font-bold">{`Hi, I'm webdevcrow`}</h1>
          <h2 className="text-2xl text-blue-600">Full-Stack Web Developer</h2>
          <p className="text-lg text-gray-700">
            {`I help small businesses build fast, responsive, modern websites that grow their brand.`}
          </p>
        </section>

        {/* Skills / Services */}
        <section>
          <h3 className="text-xl font-semibold mb-2">What I Offer</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Website Development</li>
            <li>Website Hosting</li>
            <li>Website Maintenance</li>
          </ul>
        </section>

        {/* Featured Projects */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Featured Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h4 className="font-semibold">Project One</h4>
              <p className="text-sm text-gray-600">A local business site built with Next.js and Payload CMS.</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h4 className="font-semibold">Project Two</h4>
              <p className="text-sm text-gray-600">E-commerce site with Stripe checkout and custom CMS.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-xl font-semibold">Let{`’`}s Work Together</h3>
          <p className="mb-4 text-gray-700">{`Have a project in mind? I’d love to hear about it.`}</p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </section>
      </div>
    </main>
  );
}
