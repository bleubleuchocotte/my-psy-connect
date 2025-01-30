import type Lenis from "lenis";

export default defineNuxtRouteMiddleware(() => {
	const useLenis = useState<Lenis | null>("UseLenis");

	if (useLenis.value) {
		useLenis.value.stop();
		useLenis.value.start();
	}
});
