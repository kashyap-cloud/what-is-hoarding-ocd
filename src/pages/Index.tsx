import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import { ArrowLeft } from 'lucide-react';
import hoardingIllustration from '@/assets/hoarding-illustration.png';

const keyPoints = [
  { icon: "🔁", text: "The cycle repeats — fear, keep, relief, doubt, and then it starts all over again." },
  { icon: "📦", text: "You find it very hard to throw things away, even when you want to." },
  { icon: "💭", text: "Your mind turns everyday objects into something \"important\" or \"just in case.\"" },
  { icon: "🗣️", text: "You ask others again and again if it's okay to get rid of things." },
  { icon: "🚫", text: "You avoid cleaning or organizing because it feels too overwhelming." },
];

const Index = () => {
  return (
    <div className="min-h-screen flex justify-center" style={{ background: 'linear-gradient(180deg, hsl(212 58% 92%) 0%, hsl(260 35% 92%) 100%)' }}>
      <div className="w-full max-w-[375px] min-h-screen pb-10">
        {/* Top Bar */}
        <div className="flex items-center px-5 pt-12 pb-4">
          <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-sm">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Illustration */}
        <div className="flex justify-center px-5 mb-2">
          <img src={hoardingIllustration} alt="Calm illustration about hoarding OCD" className="w-36 h-36 object-contain" />
        </div>

        {/* Title */}
        <h1 className="font-poppins font-semibold text-2xl text-foreground text-center px-6 mb-4">
          What is Hoarding OCD?
        </h1>

        {/* Intro */}
        <p className="font-poppins text-sm text-muted-foreground px-6 mb-5 leading-relaxed text-justify">
          Everyone keeps things sometimes — but for some people, letting go feels really hard.
        </p>

        {/* Body */}
        <p className="font-poppins text-sm text-foreground px-6 mb-6 leading-relaxed text-justify">
          Hoarding OCD is a form of OCD where your mind gets stuck on the fear of throwing something away that might be important. It's not just being messy or sentimental — it's an exhausting cycle where everyday items feel too valuable to lose. A simple object can trigger thoughts like "what if I need this later?" or "what if this matters?" And no matter how much you keep or reconsider — the doubt doesn't fully go away.
        </p>

        {/* Subheading */}
        <h2 className="font-poppins font-semibold text-lg text-foreground px-6 mb-4">
          What makes it OCD and not just clutter?
        </h2>

        {/* Key Point Cards */}
        <div className="flex flex-col gap-3 px-5 mb-6">
          {keyPoints.map((point, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-4 flex items-start gap-3 shadow-sm animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{point.icon}</span>
              <p className="font-poppins text-sm text-foreground leading-relaxed text-justify">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mx-5 rounded-xl p-5 mb-6" style={{ background: 'linear-gradient(135deg, hsl(212 58% 88%), hsl(157 35% 85%))' }}>
          <p className="font-poppins text-sm text-foreground leading-relaxed text-justify">
            Your brain is not broken — it's stuck in a loop. Hoarding OCD feeds on doubt and "what ifs," making everything feel important. The good news is that with the right tools, you can learn to let go and feel more at ease in your space and your mind. 💙
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
