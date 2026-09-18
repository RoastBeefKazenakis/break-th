// The breathing machine build
// (public/breathing-animation-rube-goldberg-3d-i.html) is embedded in a
// full-viewport iframe so it ships byte-identical — zero behavior drift.
// Unlike the Pomodoro wrap, there is no ticking tab-bar title to mirror,
// so this page needs no client-side observers: a plain server component.
export default function Home() {
  return (
    <main style={{ position: "fixed", inset: 0 }}>
      <iframe
        src="/breathing-animation-rube-goldberg-3d-i.html"
        title="break/th"
        allow="autoplay; fullscreen"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
      />
    </main>
  );
}
