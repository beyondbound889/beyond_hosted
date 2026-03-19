import '../css/transformationSection.css'

import transformationImage from '../Gemini_Generated_Image_jeiry2jeiry2jeir 1.png'
import starIcon from '../Icon (7).png'

const metrics = [
	{
		id: 'customers',
		value: '10,000+',
		label: 'Happy Customers',
	},
	{
		id: 'rating',
		value: '4.8',
		label: 'Average Rating',
		hasStar: true,
	},
	{
		id: 'purity',
		value: '97%',
		label: 'Purity Standard',
	},
]

function TransformationSection() {
	return (
		<section className="transform-section" aria-labelledby="transform-title">
			<div className="transform-shell">
				<div className="transform-main">
					<div className="transform-left">
						<h2 id="transform-title" className="transform-title">
							Start your
							<span>metabolic</span>
							<span>transformation</span>
							<span>today</span>
						</h2>

						<p className="transform-copy">
							Join thousands taking control of their glucose health with pharmaceutical-grade berberine. 90-day supply with 30-day satisfaction guarantee.
						</p>

						<div className="transform-actions">
							<button type="button" className="transform-btn transform-btn--primary">Shop Now</button>
							<button type="button" className="transform-btn transform-btn--secondary">Learn More</button>
						</div>
					</div>

					<div className="transform-right">
						<img
							src={transformationImage}
							alt="Glycomics bottle with stethoscope"
							className="transform-image"
							loading="lazy"
							decoding="async"
						/>
					</div>
				</div>

				<div className="transform-metrics" role="list" aria-label="Product impact metrics">
					{metrics.map((metric) => (
						<div className="transform-metric" role="listitem" key={metric.id}>
							<p className="transform-value">
								{metric.value}
								{metric.hasStar ? (
									<img src={starIcon} alt="" aria-hidden="true" className="transform-inline-star" loading="lazy" decoding="async" />
								) : null}
							</p>
							<p className="transform-label">{metric.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TransformationSection
