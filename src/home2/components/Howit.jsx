import '../css/howit.css'
import doctorApprovedImage from '../image 18.png'
import mechanismBackground from '../Screenshot 2026-03-13 at 19.16.40 1.png'

const steps = [
	{
		id: 'step-1',
		label: 'Step 1',
		title: 'Activates Metabolic Pathway',
		description: 'Berberine triggers AMPK, your cellular energy sensor that regulates glucose uptake',
	},
	{
		id: 'step-2',
		label: 'Step 2',
		title: 'Supports Liver Glucose Regulation',
		description: 'Reduces excess glucose production in the liver while improving insulin receptor sensitivity',
	},
]

const featureStep = {
	label: 'Step 3',
	title: 'Enhances Cellular Glucose Utilization',
	description: 'Increases glucose transport into cells, helping maintain healthy blood sugar levels',
}

function HowItWorks() {
	return (
		<section className="howit-section" aria-labelledby="howit-title">
			<div className="howit-inner">
				<div className="howit-header">
					<h2 id="howit-title" className="howit-title">How it works</h2>
				</div>

				<div className="howit-bento">
					<div className="howit-top">
						<div className="howit-step-stack">
							{steps.map((step) => (
								<article key={step.id} className="howit-card howit-card--step">
									<p className="howit-card-step">{step.label}</p>
									<div className="howit-card-copy">
										<h3 className="howit-card-title">{step.title}</h3>
										<p className="howit-card-description">{step.description}</p>
									</div>
								</article>
							))}
						</div>

						<article className="howit-card howit-card--feature">
							<div className="howit-card-copy howit-card-copy--feature">
								<p className="howit-card-step">{featureStep.label}</p>
								<h3 className="howit-card-title">{featureStep.title}</h3>
								<p className="howit-card-description">{featureStep.description}</p>
							</div>

							<div className="howit-feature-visual">
								<img
									src={doctorApprovedImage}
									alt="Doctor standing with arms folded"
									className="howit-feature-image"
									loading="lazy"
									decoding="async"
								/>
								<div className="howit-approval-pill">
									<span className="howit-approval-icon" aria-hidden="true">
										<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="12" cy="12" r="10" fill="currentColor" />
											<path d="M8 12.3L10.6 14.9L16.1 9.4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
									Doctor Approved
								</div>
							</div>
						</article>
					</div>

					<div className="howit-bottom">
						<article className="howit-card howit-card--promo">
							<img
								src={mechanismBackground}
								alt=""
								aria-hidden="true"
								className="howit-promo-background"
								loading="lazy"
								decoding="async"
							/>
							<div className="howit-promo-overlay" aria-hidden="true" />
							<div className="howit-promo-copy">
								<h3 className="howit-promo-title">
									A clinically validated mechanism broken down into three simple steps
								</h3>
							</div>
						</article>

						<article className="howit-card howit-card--cta">
							<p className="howit-proof-text">
								Backed by 200+ peer-reviewed studies on berberine's metabolic effects
							</p>
							<a href="#" className="howit-btn">
								Get Started
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowItWorks

