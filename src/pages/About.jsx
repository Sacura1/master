export default function About() {
  return (
    <div className="container narrow">
      <h1>About Master</h1>
      <p className="page-sub">A community-powered news outlet.</p>

      <section className="prose">
        <p>
          Master is a modern news platform that blends professional editorial coverage
          with contributions from its readers. We believe the best stories come from a
          mix of expertise, lived experience, and curiosity.
        </p>
        <h2>Our principles</h2>
        <ul>
          <li><strong>Open contribution.</strong> Anyone can publish a story.</li>
          <li><strong>Transparent attribution.</strong> Every article is signed.</li>
          <li><strong>Reader first.</strong> Fast, ad-light, easy to read.</li>
        </ul>
        <h2>Get involved</h2>
        <p>
          Have a story to share? Head to the <a href="/post">Post News</a> page and
          publish in minutes. Looking for a topic? Browse <a href="/categories">Categories</a>.
        </p>
      </section>
    </div>
  )
}
