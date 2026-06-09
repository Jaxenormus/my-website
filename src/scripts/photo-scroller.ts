import EmblaCarousel from "embla-carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export function initScrollers() {
  document.querySelectorAll<HTMLElement>(".embla").forEach((node) => {
    const embla = EmblaCarousel(
      node,
      { loop: true, align: "center", dragFree: true, containScroll: false },
      [WheelGesturesPlugin({ forceWheelAxis: "x" })],
    );

    embla.on("pointerDown", () => node.classList.add("is-grabbing"));
    embla.on("pointerUp", () => node.classList.remove("is-grabbing"));
  });
}
