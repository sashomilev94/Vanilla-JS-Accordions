function Accordion(options) {
	const container = document.getElementById(options.container);
	
	createAccordionStructure(options, container);

	expandAccordions(container)
}

const expandAccordions = (container) => {
	const accordions = container.querySelectorAll('.accordion-section');

	accordions.forEach((item) => {
		const accordion = item;
		
		const toggler = item.querySelector('.accordion-head');

		toggler.addEventListener('click', (event) => {
			const expandableContent = toggler.nextElementSibling; 
			const parent = toggler.parentNode;
			const padding = 36;
			
			parent.classList.toggle('active');


			if (!expandableContent.classList.contains('active')) {
				expandableContent.classList.add('active');
				expandableContent.style.height = 'auto';

				const height = expandableContent.clientHeight + padding + 'px';

				expandableContent.style.height = height;

			} else {
				expandableContent.style.height = '0px';

				expandableContent.classList.remove('active');
			}
		});
	});
}

const createAccordionStructure = (options, container) => {
	const panels = options.panels;	
	
	/* Create Main Title HTML structure */	
	const titleMarkup = `
		${options.mainTitle ? 
			`
				<div class="accordion-top">
					<h2>${options.mainTitle}</h2>
				</div>
			`
		: ''}
	`

	/* Create Accordions Body Markup */
	const bodyMarkup = `
		${panels.map(panel => `
			<div class="accordion-section">
				<div class="accordion-head">
					<h2 class="accordion-title">${panel.title}</h2>

					${panel.subtitle ? `<h4 class="accordion-subtitle">${panel.subtitle}</h4>` : ''}
				</div>

				<div class="accordion-body">
					<div class="accordion-entry">
						${panel.content}
					</div>
				</div>
			</div>
		`).join('')}
	`;

	/* Append Title and Body to the container */
	container.innerHTML = titleMarkup + bodyMarkup;
}

window.Accordion = Accordion;
