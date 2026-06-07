import { DemoShowcase } from "@/components/demo/DemoShowcase";

export const metadata = {
  title: "AI Deck Studio — Demo",
  description:
    "An auto-playing walkthrough of the Maverx AI Training Builder: a brief becomes an on-brand training deck.",
};

/**
 * Homepage = the auto-playing, looping product showcase. Fully scripted on canned
 * data (no backend), so this deploys as a self-contained static site.
 */
export default function HomePage() {
  return <DemoShowcase />;
}
