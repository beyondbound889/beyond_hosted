
import '../css/MeetGlyco.css'
import bottleImg from '../assets/bottle.png'

const ingredients = [
	'Berberine',
	'Gurmar',
	'Vijaysar',
	'Jambu seeds',
	'Karela',
	'Haridra',
	'Amakali',
]

function MeetGlycomics() {
	return (
		<section className="glyco-section">
			<div className="glyco-inner">
				<h1 className="glyco-page-title">Meet Glycomics</h1>

				<div className="glyco-content">
					{/* LEFT CONTENT */}
					<div className="glyco-text">
						<h2 className="glyco-title">Know what goes into glycomics</h2>

						<div className="glyco-rotating">
							<div className="glyco-words">
								{ingredients.map((ingredient, idx) => (
									<div key={idx} className="glyco-word">{ingredient}</div>
								))}
							</div>
						</div>

						<p className="glyco-description">
							Glycomics is a <span className="glyco-highlight">clinically-informed Ayurvedic formulation</span> designed to support healthy glucose metabolism in adults.
						</p>

						<p className="glyco-description glyco-light">
							It combines standardized botanical extracts with modern analytical validation to ensure consistency, purity, and responsible daily support.
						</p>
					</div>

					{/* RIGHT IMAGE */}
					<div className="glyco-image-wrapper">
						<img
							src={bottleImg}
							alt="Glycomics Bottle"
							className="glyco-image"
							loading="lazy"
							decoding="async"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MeetGlycomics
