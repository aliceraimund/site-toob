export function InfinityDivider() {
  return (
    <div className="relative w-full bg-[#0D0D0D] py-20">
      <div className="absolute left-0 right-0 top-1/2 h-px bg-[#C0392B]/70" />
      <div className="relative mx-auto flex items-center justify-center" style={{ perspective: 800 }}>
        <div
          className="relative bg-[#0D0D0D] px-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src="/logos/Símbolo Toob.png"
            alt=""
            aria-hidden
            width={120}
            height={120}
            className="spin-y"
            style={{ height: 120, width: "auto", filter: "drop-shadow(0 0 24px rgba(192,57,43,0.4))" }}
          />
        </div>
      </div>
    </div>
  );
}
