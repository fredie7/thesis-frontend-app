import Header from "@/components/Header";
import {
  Accessibility,
  Activity,
  Brain,
  ClipboardPlus,
  HeartPulse,
  Pill,
  PlusIcon,
  MessageSquareText,
  Telescope,
  Podcast,
  MessageSquare,
  BotOff,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      name: "Stress relief companion",
      description:
        "Chat with MED-45 to explore, recognize and reframe cognitive distortions.",
      icon: BotOff,
    },
    {
      name: "Instant CDD Techniques",
      description:
        "Discover how your thinking habits influence your emotions and behavior.",
      icon: Telescope,
    },
    {
      name: "Session Summaries",
      description:
        "Engage in a personalized conversation to relieve stress for a balanced mindset.",
      icon: Podcast,
    },
    // {
    //   name: "Mindfulness Exercises",
    //   description:
    //     "Engage with interactive mindfulness practices to enhance your self-awareness and relaxation.",
    //   icon: HeartPulse,
    // },
    // {
    //   name: "Cognitive Restructuring Tools",
    //   description:
    //     "Identify and rework negative thought patterns due to interfering cognitive distortions.",
    //   icon: Brain,
    // },
    // {
    //   name: "Progressive Relaxation Guides",
    //   description:
    //     "Access guided techniques to identify and reframe cognitive distortions anytime.",
    //   icon: ClipboardPlus,
    // },
  ];
  return (
    <main className="">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-purple to-black-900 p-4">
        <div className="max-auto max-w-2xl sm:text-center">
          <h2 className=" font-semibold leading-9 text-white mt-11 text-center">
            {/* MED-45 AI - Cognitive Distortion Detection */}
            MED-45 AI <br />- Your Personalized Thought Clarity Companion that
            detects Cognitive Distortions
          </h2>
        </div>

        <p className="mt-6 text-lg text-center leading-8 text-white max-auto max-w-2xl">
          {/* Your Personalized Thought Clarity Companion */}
          <br />
          {/* identifying cognitive distortions, providing insights, and engaging
          you in interactive discussions for a clearer mindset. */}
          A cognitive distortion is like a trick your mind plays on you that
          makes you see things worse than they really are.
          <br />
          For instance:
          <br />
          “I’ll never be good at this!” just because you made one
          mistake.(Overgeneralization Cognitive Distortion)
          <br />
          “She didn’t reply to my message—she must be mad at me.”(Mind Reading
          Cognitive Distortion) “If I mess up this presentation, my career is
          over!”(Catastrophizing Cognitive Distortion)
          <br />
          So..
        </p>
        {/* <div className="flex justify-center items-center mt-4">
          <div className="bg-gray-700 border btnStyle text-white p-2 rounded-md cursor-pointer">
            <p className="uppercase">Explore Miscellaneous Incentitives:</p>
          </div>
        </div> */}

        <div className="flex justify-center px-4 sm:px-6 lg:px-8 mt-16 lg:mt-12">
          <div className="max-w-7xl w-full">
            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative flex flex-col items-start pl-9"
                >
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5 text-red-500"
                    />
                  </dt>
                  <dd className="text-white bg-purple-900/50 rounded-lg max-w-[300px] p-2">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
