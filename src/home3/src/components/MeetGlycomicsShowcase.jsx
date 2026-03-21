import '../css/meetGlycomicsShowcase.css'
import productShowcaseImage from '../../Gemini_Generated_Image_5ccfpd5ccfpd5ccf 2.png'

const ingredients = [
	'Karela',
	'Berberine',
	'Gurmar',
	'Vijaysar',
	'Jambu seeds',
	'Haridra',
	'Amakali',
]

const loopIngredients = [...ingredients, ingredients[0]]

function MeetGlycomicsShowcase() {
	return (
		<section className="mgs-section" aria-labelledby="mgs-title">
			<div className="mgs-frame">
				<div className="mgs-title-wrap">
					<h2 id="mgs-title" className="mgs-title">Meet Glycomics</h2>
				</div>

				<div className="mgs-content">
					<div className="mgs-left">
						<div className="mgs-copy">
							<h3 className="mgs-heading">
								Know what goes into
								<span className="mgs-heading-accent">Glycomics</span>
							</h3>

							<div
								className="mgs-ingredient-wrap"
								aria-label="Ingredients"
								style={{ '--ingredient-count': ingredients.length }}
							>
								<div className="mgs-ingredient-track" aria-hidden="true">
									{loopIngredients.map((ingredient, index) => (
										<p key={`${ingredient}-${index}`} className="mgs-ingredient">{ingredient}</p>
									))}
								</div>
							</div>

							<div className="mgs-paragraph-group">
								<p className="mgs-paragraph mgs-paragraph--primary">
									Glycomics is a <strong>clinically-informed Ayurvedic formulation</strong>
									designed to support healthy glucose metabolism in adults.
								</p>
								<p className="mgs-paragraph mgs-paragraph--secondary">
									It combines standardized botanical extracts with modern analytical
									validation to ensure consistency, purity, and responsible daily support.
								</p>
							</div>
						</div>
					</div>

					<div className="mgs-right">
						<img
							src={productShowcaseImage}
							alt="Glycomics bottle product showcase"
							className="mgs-image"
							loading="lazy"
							decoding="async"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MeetGlycomicsShowcase