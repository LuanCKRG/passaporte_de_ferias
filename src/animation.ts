// Intersection Observer para animações ao scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px"
}

const observer = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			;(entry.target as HTMLElement).style.animationPlayState = "running"
		}
	}
}, observerOptions)

// Observar todos os elementos com classes de animação
for (const el of document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right")) {
	;(el as HTMLElement).style.animationPlayState = "paused"
	observer.observe(el)
}

// Adicionar efeito de hover suave aos botões
for (const button of document.querySelectorAll("button")) {
	button.addEventListener("mouseenter", function () {
		this.style.transform = "translateY(-2px) scale(1.02)"
	})

	button.addEventListener("mouseleave", function () {
		this.style.transform = "translateY(0) scale(1)"
	})
}
