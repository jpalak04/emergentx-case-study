import { useRef, useEffect, useState } from "react";
import "./App.css";

// Navbar component
const Navbar = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-emergent-dark/90 backdrop-blur-sm z-50 border-b ${isScrolled ? 'border-emergent-accent/30 shadow-lg' : 'border-transparent'} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">EmergentX</div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('overview')} className="text-gray-300 hover:text-white transition">Overview</button>
            <button onClick={() => scrollToSection('userInsight')} className="text-gray-300 hover:text-white transition">User Insight</button>
            <button onClick={() => scrollToSection('userInsight2')} className="text-gray-300 hover:text-white transition">Riya's Story</button>
            <button onClick={() => scrollToSection('rebuilt')} className="text-gray-300 hover:text-white transition">Rebuilt</button>
            <button onClick={() => scrollToSection('proposal')} className="text-gray-300 hover:text-white transition">Proposal</button>
            <button onClick={() => scrollToSection('future')} className="text-gray-300 hover:text-white transition">Future</button>
            <button onClick={() => scrollToSection('community')} className="text-gray-300 hover:text-white transition">Community</button>
            <button onClick={() => scrollToSection('impact')} className="text-gray-300 hover:text-white transition">Impact</button>
            <button onClick={() => scrollToSection('join')} className="text-gray-300 hover:text-white transition">Join</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-emergent-dark text-white relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107" 
          alt="Abstract digital background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-emergent-darker/70 to-emergent-dark"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Bridging the Prompt Gap</h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
          A product case study built on Emergent, for Emergent
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
          Exploring how onboarding can evolve with a guided prompt experience
        </p>
        <button 
          onClick={() => scrollToSection('overview')} 
          className="bg-emergent-accent hover:bg-emergent-accent/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg animate-fade-in transition transform hover:scale-105" 
          style={{animationDelay: '0.6s'}}
        >
          View Case Study
        </button>
      </div>
    </section>
  );
};

// Overview Section
const OverviewSection = () => {
  return (
    <section id="overview" className="py-24 bg-emergent-darker text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-emergent-dark p-10 rounded-xl border border-gray-800 transform transition duration-300 hover:translate-y-[-5px] hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-5 text-emergent-accent">Problem</h3>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Prompting is too open-ended for new users, creating a barrier to entry for those unfamiliar with AI interaction patterns.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Many users start with vague ideas but struggle to formulate effective prompts that deliver the desired outcome.
            </p>
          </div>
          
          <div className="bg-emergent-dark p-10 rounded-xl border border-gray-800 transform transition duration-300 hover:translate-y-[-5px] hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-5 text-emergent-accent">User Testing</h3>
            <p className="text-gray-300 mb-5 leading-relaxed">
              We conducted testing with a 12-year-old and a non-technical peer to understand the obstacles they faced when interacting with AI.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Their experiences revealed common patterns of confusion and hesitation when formulating prompts.
            </p>
          </div>
          
          <div className="bg-emergent-dark p-10 rounded-xl border border-gray-800 transform transition duration-300 hover:translate-y-[-5px] hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-5 text-emergent-accent">Solution</h3>
            <p className="text-gray-300 mb-5 leading-relaxed">
              EmergentX — a native assist that clarifies intent and recommends plugins based on the user's natural language inputs.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This intelligent layer helps convert vague ideas into structured prompts and suggests the right tools for the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// User Insight Section
const UserInsightSection = () => {
  return (
    <section id="userInsight" className="py-24 bg-emergent-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">User Testing – Aanshi (12)</h2>
          
          <div className="bg-gradient-to-r from-emergent-darker to-emergent-dark p-10 rounded-xl border border-gray-800 mb-12 shadow-lg">
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              During our user testing, Aanshi, a 12-year-old aspiring artist, tried to use Emergent for a creative project. She had a clear vision but struggled to communicate it effectively to the AI.
            </p>
            
            <blockquote className="border-l-4 border-emergent-accent pl-6 py-3 mb-8">
              <p className="text-xl italic text-gray-200">
                "I want to draw something and it tells me what it is."
              </p>
            </blockquote>
            
            <p className="text-gray-400 mb-4 leading-relaxed">
              What she meant was a reverse image recognition tool, but she lacked the vocabulary to express this need clearly.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mb-8 text-emergent-accent">Key Struggles Identified:</h3>
          
          <ul className="space-y-6 mb-12">
            <li className="flex items-start">
              <span className="text-emergent-accent mr-4 mt-1 text-xl">◆</span>
              <p className="text-gray-300 text-lg">Uncertainty about what level of detail is needed in a prompt</p>
            </li>
            <li className="flex items-start">
              <span className="text-emergent-accent mr-4 mt-1 text-xl">◆</span>
              <p className="text-gray-300 text-lg">Limited awareness of available plugins and their capabilities</p>
            </li>
            <li className="flex items-start">
              <span className="text-emergent-accent mr-4 mt-1 text-xl">◆</span>
              <p className="text-gray-300 text-lg">Frustration when initial attempts failed to produce desired results</p>
            </li>
          </ul>
          
          <div className="bg-emergent-accent/20 p-8 rounded-xl border border-emergent-accent/30 shadow-lg">
            <p className="text-white text-center font-medium text-lg">
              EmergentX was designed as a direct response to this gap — helping users of all ages and technical backgrounds bridge their intentions with the right tools and prompts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Second User Insight Section
const UserInsightSection2 = () => {
  return (
    <section id="userInsight2" className="py-24 bg-emergent-darker text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">User Testing – Riya, Marketing Student</h2>
          
          <div className="bg-gradient-to-r from-emergent-dark to-emergent-darker p-10 rounded-xl border border-gray-800 mb-12 shadow-lg">
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Riya is a 23-year-old marketing student who wanted to build a site for her thrift store. She had a clear vision, but struggled with how to communicate design needs through prompts. She wasn't sure what plugins to use, or how to prompt for visuals like image galleries or layout styles.
            </p>
            
            <blockquote className="border-l-4 border-emergent-accent pl-6 py-3 mb-8">
              <p className="text-xl italic text-gray-200">
                "I know how I want it to look. I just don't know how to ask the AI to do it."
              </p>
            </blockquote>
          </div>
          
          <h3 className="text-2xl font-bold mb-8 text-emergent-accent">Challenges Faced:</h3>
          
          <ul className="space-y-6 mb-12">
            <li className="flex items-start">
              <span className="text-emergent-accent mr-4 mt-1 text-xl">◆</span>
              <p className="text-gray-300 text-lg">Didn't know how to prompt for layout or gallery elements</p>
            </li>
            <li className="flex items-start">
              <span className="text-emergent-accent mr-4 mt-1 text-xl">◆</span>
              <p className="text-gray-300 text-lg">Unsure whether she could include tone and aesthetic in the prompt</p>
            </li>
            <li className="flex items-start">
              <span className="text-emergent-accent mr-4 mt-1 text-xl">◆</span>
              <p className="text-gray-300 text-lg">Confused about which plugins supported visual styling</p>
            </li>
          </ul>
          
          <div className="bg-emergent-accent/20 p-8 rounded-xl border border-emergent-accent/30 shadow-lg">
            <p className="text-white text-center font-medium text-lg">
              Riya's experience showed that Emergent could be incredibly useful for creators — if it offered clearer guidance around structure, visuals, and plugin pairing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why I Rebuilt This Section
const RebuiltSection = () => {
  return (
    <section id="rebuilt" className="py-24 bg-emergent-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why I Rebuilt This in Emergent</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-emergent-darker p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-center text-emergent-accent">Notion Page</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-emergent-accent mr-3 mt-1">•</span>
                  <p className="text-gray-300">Static and document-style</p>
                </li>
                <li className="flex items-start">
                  <span className="text-emergent-accent mr-3 mt-1">•</span>
                  <p className="text-gray-300">Read-only</p>
                </li>
                <li className="flex items-start">
                  <span className="text-emergent-accent mr-3 mt-1">•</span>
                  <p className="text-gray-300">Good for research summaries</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-emergent-darker p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-center text-emergent-accent">Emergent Build</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-emergent-accent mr-3 mt-1">•</span>
                  <p className="text-gray-300">Scrollable and interactive</p>
                </li>
                <li className="flex items-start">
                  <span className="text-emergent-accent mr-3 mt-1">•</span>
                  <p className="text-gray-300">Motion, flow, and better storytelling</p>
                </li>
                <li className="flex items-start">
                  <span className="text-emergent-accent mr-3 mt-1">•</span>
                  <p className="text-gray-300">Better for showing product vision</p>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            I first built this case study in Notion, but then decided to test whether Emergent could power something beyond dev tooling — like storytelling. So I rebuilt it here, on the very platform it's about.
          </p>
        </div>
      </div>
    </section>
  );
};

// Feature Proposal Section
const ProposalSection = () => {
  return (
    <section id="proposal" className="py-24 bg-emergent-darker text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">EmergentX – A Native Prompt Assistant</h2>
        
        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-xl text-gray-300 text-center mb-12 leading-relaxed">
            EmergentX is a lightweight, embedded layer in Emergent that helps users move from raw idea → structured prompt → plugin suggestion
          </p>
          
          <div className="rounded-xl overflow-hidden mb-10 shadow-xl">
            <img 
              src="https://cdn.pixabay.com/photo/2017/06/21/11/22/process-flow-2426930_1280.jpg" 
              alt="EmergentX Flowchart" 
              className="w-full h-auto"
            />
            <div className="bg-emergent-dark p-4 text-center text-sm text-gray-400">
              Building an App with EmergentX: A Step-by-Step Guide - visual selection
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto border-collapse">
            <thead>
              <tr>
                <th className="border-b border-gray-700 p-5 text-left text-emergent-accent">Without EmergentX</th>
                <th className="border-b border-gray-700 p-5 text-left text-emergent-accent">With EmergentX</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-800 p-5 text-gray-300">Prompting is unclear</td>
                <td className="border-b border-gray-800 p-5 text-gray-300">Guided structure</td>
              </tr>
              <tr>
                <td className="border-b border-gray-800 p-5 text-gray-300">Plugin confusion</td>
                <td className="border-b border-gray-800 p-5 text-gray-300">Smart suggestions</td>
              </tr>
              <tr>
                <td className="border-b border-gray-800 p-5 text-gray-300">Drop-off risk</td>
                <td className="border-b border-gray-800 p-5 text-gray-300">Higher completion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Future Section
const FutureSection = () => {
  return (
    <section id="future" className="py-24 bg-emergent-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
          alt="Future possibilities" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-emergent-dark/80 to-emergent-dark"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Where Emergent Could Go</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-emergent-darker/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-emergent-accent text-center">Emergent for Creators</h3>
            <p className="text-gray-300 text-center">
              Specialized templates, visual-focused plugins, and design-oriented prompting assistance for artists, designers, and content creators.
            </p>
          </div>
          
          <div className="bg-emergent-darker/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-emergent-accent text-center">Emergent for Commerce</h3>
            <p className="text-gray-300 text-center">
              Integration with e-commerce platforms, product listing generators, and marketing copy assistance for small businesses.
            </p>
          </div>
          
          <div className="bg-emergent-darker/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-emergent-accent text-center">Emergent for Collaborative Prompting</h3>
            <p className="text-gray-300 text-center">
              Multi-user prompt editing, shared project spaces, and collaborative workflows for teams building together.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300">
            This case study focused on onboarding, but the same approach could power tools for creators, indie builders, coaches, and small teams.
          </p>
        </div>
      </div>
    </section>
  );
};

// Community Section
const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-emergent-darker text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Let's Involve the Vibe Coding Community</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
            While researching this case study, I came across multiple creators sharing what they're building with Emergent. Involving them early — through feedback, spotlight features, or community-led onboarding — could help shape EmergentX and grow the brand authentically.
          </p>
          
          <div className="bg-emergent-accent/20 p-8 rounded-xl border border-emergent-accent/30 text-center font-medium text-white text-xl">
            People are already building. Let's talk to them.
          </div>
        </div>
      </div>
    </section>
  );
};

// Impact Section
const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-emergent-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Impact</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emergent-accent to-emergent-secondary p-8 rounded-xl text-center transform transition duration-300 hover:scale-105 shadow-lg">
            <div className="text-5xl font-bold mb-4">↑40%</div>
            <p className="text-white font-medium">app success rate</p>
          </div>
          
          <div className="bg-gradient-to-br from-emergent-accent to-emergent-secondary p-8 rounded-xl text-center transform transition duration-300 hover:scale-105 shadow-lg">
            <div className="text-5xl font-bold mb-4">↓25%</div>
            <p className="text-white font-medium">prompt dropout</p>
          </div>
          
          <div className="bg-gradient-to-br from-emergent-accent to-emergent-secondary p-8 rounded-xl text-center transform transition duration-300 hover:scale-105 shadow-lg">
            <div className="text-5xl font-bold mb-4">↑</div>
            <p className="text-white font-medium">Plugin adoption</p>
          </div>
          
          <div className="bg-gradient-to-br from-emergent-accent to-emergent-secondary p-8 rounded-xl text-center transform transition duration-300 hover:scale-105 shadow-lg">
            <div className="text-5xl font-bold mb-4">✓</div>
            <p className="text-white font-medium">Better outcomes for creative & young users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Join Section
const JoinSection = () => {
  return (
    <section id="join" className="py-24 bg-gradient-to-b from-emergent-darker to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Why I Want to Join This Journey</h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm probably not extraordinary — but I might be ordinary enough to understand the problems real users face. I want to keep building for people like Aanshi and Riya. I want to listen, create, and help Emergent grow into something even more inclusive and accessible.
          </p>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-emergent-dark font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-100 mb-16"
          >
            Let's Connect
          </a>
          
          <div className="mt-16 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Got thoughts or feedback? Drop them below — I'd love to hear what you think.</h3>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 bg-emergent-darker border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emergent-accent text-white"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="4" 
                  className="w-full p-3 bg-emergent-darker border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emergent-accent text-white"
                ></textarea>
              </div>
              <div>
                <button 
                  type="button" 
                  className="bg-emergent-accent hover:bg-emergent-accent/90 text-white font-medium py-2 px-6 rounded-lg transition"
                >
                  Send Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 bg-black text-gray-400 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>© 2025 EmergentX Case Study</p>
      </div>
    </footer>
  );
};

function App() {
  // Create refs for each section
  const overviewRef = useRef(null);
  const userInsightRef = useRef(null);
  const userInsight2Ref = useRef(null);
  const rebuiltRef = useRef(null);
  const proposalRef = useRef(null);
  const futureRef = useRef(null);
  const communityRef = useRef(null);
  const impactRef = useRef(null);
  const joinRef = useRef(null);

  // Function to handle scrolling to sections
  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      'overview': overviewRef,
      'userInsight': userInsightRef,
      'userInsight2': userInsight2Ref,
      'rebuilt': rebuiltRef,
      'proposal': proposalRef,
      'future': futureRef,
      'community': communityRef,
      'impact': impactRef,
      'join': joinRef
    };
    
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Setup intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select all sections
    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App bg-emergent-dark text-white">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      
      <div ref={overviewRef}>
        <OverviewSection />
      </div>
      
      <div ref={userInsightRef}>
        <UserInsightSection />
      </div>
      
      <div ref={userInsight2Ref}>
        <UserInsightSection2 />
      </div>
      
      <div ref={rebuiltRef}>
        <RebuiltSection />
      </div>
      
      <div ref={proposalRef}>
        <ProposalSection />
      </div>
      
      <div ref={futureRef}>
        <FutureSection />
      </div>
      
      <div ref={communityRef}>
        <CommunitySection />
      </div>
      
      <div ref={impactRef}>
        <ImpactSection />
      </div>
      
      <div ref={joinRef}>
        <JoinSection />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
