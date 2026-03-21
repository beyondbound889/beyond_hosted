
import '../css/WhoGlyco.css'

const Card = ({ title, description, icon }) => (
	<div className="who-card">
		<div className="who-icon">{icon}</div>
		<h3 className="who-card-title">{title}</h3>
		<p className="who-card-description">{description}</p>
	</div>
)

const cardData = [
	{
		title: 'Early Insulin Resistance',
		description: 'Individuals with prediabetic markers or HbA1c levels approaching concern',
		icon: (
			<svg width="40" height="40" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M32.5668 16.8718H28.6745C27.9885 16.8704 27.321 17.0936 26.774 17.5074C26.227 17.9212 25.8305 18.5028 25.6454 19.1633L21.9571 32.2841C21.9333 32.3656 21.8837 32.4372 21.8158 32.4882C21.7479 32.5391 21.6653 32.5666 21.5804 32.5666C21.4955 32.5666 21.4129 32.5391 21.345 32.4882C21.2771 32.4372 21.2275 32.3656 21.2037 32.2841L12.5402 1.45951C12.5164 1.37801 12.4668 1.30641 12.3989 1.25548C12.331 1.20454 12.2484 1.177 12.1635 1.177C12.0786 1.177 11.996 1.20454 11.9281 1.25548C11.8602 1.30641 11.8106 1.37801 11.7868 1.45951L8.09854 14.5804C7.91407 15.2382 7.52 15.8179 6.97615 16.2315C6.4323 16.6451 5.76836 16.8699 5.08513 16.8718H1.17712" stroke="#2a7c7c" strokeWidth="2.35422" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
	},
	{
		title: 'Metabolic Wellness Focused',
		description: 'Adults prioritizing long-term glucose regulation and cellular health',
		icon: (
			<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="7" r="4" stroke="#2a7c7c" strokeWidth="2" strokeLinecap="round" />
				<path d="M3 20C3 17.2386 5.23858 15 8 15H12C14.7614 15 17 17.2386 17 20" stroke="#2a7c7c" strokeWidth="2" strokeLinecap="round" />
				<path d="M17 7C17 7 18 7 18 9C18 11 17 11 17 11" stroke="#2a7c7c" strokeWidth="2" strokeLinecap="round" />
				<path d="M19 15C20.1046 15 21 15.8954 21 17V20" stroke="#2a7c7c" strokeWidth="2" strokeLinecap="round" />
			</svg>
		),
	},
	{
		title: 'Plant-Based Support Seekers',
		description: 'Those looking for natural, evidence-based alternatives to synthetic options',
		icon: (
			<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8 21H16" stroke="#2a7c7c" strokeWidth="2" strokeLinecap="round" />
				<path d="M12 21C12 17 12 14 14.5 10.5C16.5 7.5 19 6 19 6C19 6 17.5 8.5 14.5 11.5C12.5 13.5 12 16 12 16" stroke="#2a7c7c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M12 16C12 16 9.5 16.5 6.5 14.5C4 13 3 10 3 10C3 10 5.5 10 8.5 12C11.5 14 12 16 12 16" stroke="#2a7c7c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
	},
]

function WhoGlycomics() {
	return (
		<section className="who-section">
			<div className="who-inner">
				<h2 className="who-title">Who is Glycomics for?</h2>

				<div className="who-cards-container">
					{cardData.map((card, idx) => (
						<Card key={idx} title={card.title} description={card.description} icon={card.icon} />
					))}
				</div>

				<div className="who-disclaimer">
					<p className="who-disclaimer-text">
						<strong>Medical Disclaimer:</strong> Glycomics is not intended to diagnose, treat, cure, or prevent any disease. Not a replacement for prescribed treatment. Consult your physician before use, especially if you have diabetes or take medication.
					</p>
				</div>
			</div>
		</section>
	)
}

export default WhoGlycomics
