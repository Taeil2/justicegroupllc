import './App.css'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <section className="hero-section">
        <div className="content">
          <div className="center-content">
            <h1>Welcome to Justice Group LLC</h1>
            <h2>Site Under Construction</h2>
          </div>
        </div>
      </section>
      <section className="description-section">
        <div className="content">
          <p>At Justice Group LLC, we challenge injustice at its roots. Our firm is built for those who have been failed by the system—people harmed by outdated laws, unprotected ideas, broken relationships, or unchecked harassment.</p>
          <p>We practice bad law—the pursuit of justice for those harmed by others. Whether through theft, abuse, fraud, or violence, we represent victims and ensure wrongdoers are held accountable under the law. We protect the creators and thinkers through origin and idea law, protecting the ownership of original work and intellectual property. In the complex world of personal relationships, we support clients in deeply personal legal matters. When it comes to harassment, we fight for those subjected to mistreatment in workplaces, homes, or public spaces—helping them regain their voice and safety.</p>
          <p>At Justice Group LLC, we believe the law should protect, empower, and restore. We’re not just your legal team—we’re your partner in the pursuit of what’s right.</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="content">
          <Contact />
        </div>
      </section>
    </>
  )
}

export default App
