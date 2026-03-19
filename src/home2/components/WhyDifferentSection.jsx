import '../css/whyDifferentSection.css'

import cardManufactured from '../Image (Manufactured in GMP Facility).png'
import cardLabValidated from '../Image (GC-MS Lab Validated).png'
import cardBerberine from '../Image (97.2 Standardized Berberine).png'

import iconManufactured from '../Icon (5).png'
import iconValidated from '../Container.png'
import iconBerberine from '../Group.png'

const cards = [
	{
		id: 'manufactured',
		title: 'Manufactured in GMP Facility',
		image: cardManufactured,
		icon: iconManufactured,
		iconAlt: 'Manufacturing quality icon',
		titleWidth: '244px',
		lineTop: '112px',
	},
	{
		id: 'validated',
		title: 'GC-MS Lab Validated',
		image: cardLabValidated,
		icon: iconValidated,
		iconAlt: 'Lab validation icon',
		titleWidth: '257.67px',
		lineTop: '80px',
	},
	{
		id: 'berberine',
		title: '97.2%\nStandardized\nBerberine',
		image: cardBerberine,
		icon: iconBerberine,
		iconAlt: 'Standardization icon',
		titleWidth: '257.66px',
		lineTop: '112px',
		badge: 'Quality Assured',
	},
]

function WhyDifferentSection() {
	return (
		<section className="wds-section" aria-labelledby="wds-title">
			<div className="wds-shell">
				<div className="wds-heading-wrap">
					<h3 id="wds-title" className="wds-title">Why It&apos;s Different</h3>
				</div>

				<div className="wds-cards" role="list">
					{cards.map((card) => (
						<article key={card.id} className="wds-card" role="listitem">
							<img src={card.image} alt={card.title.replaceAll('\n', ' ')} className="wds-card-image" loading="lazy" decoding="async" />
							<div className="wds-overlay" aria-hidden="true" />

							<div className="wds-icon-wrap">
								<img src={card.icon} alt={card.iconAlt} className="wds-icon" loading="lazy" decoding="async" />
							</div>

							<div className="wds-content-wrap">
								{card.badge ? (
									<div className="wds-badge">{card.badge}</div>
								) : null}
								<div className="wds-title-box" style={{ width: card.titleWidth }}>
									<h4 className="wds-card-title">{card.title}</h4>
								</div>
								<span className="wds-accent" style={{ top: card.lineTop }} aria-hidden="true" />
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default WhyDifferentSection

