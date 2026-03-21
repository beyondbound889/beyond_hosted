import '../css/aboutBeyond.css'
import aboutImage from '../Gemini_Generated_Image_9ceczi9ceczi9cec 1 (1).png'
import naturalBadgeImage from '../Frame 2610589.png'

function AboutBeyond() {
	return (
		<section className="about-section" aria-labelledby="about-beyond-title">
			<div className="about-solution">
				<div className="about-image-wrap">
					<img
						src={aboutImage}
						alt="Beyond Bound emblem with natural wood background"
						className="about-main-image"
						loading="lazy"
						decoding="async"
					/>
				</div>

				<div className="about-right-frame">
					<div className="about-copy-stack">
						<div className="about-pill">
							<img
								src={naturalBadgeImage}
								alt="100% Natural"
								className="about-pill-image"
								loading="lazy"
								decoding="async"
							/>
						</div>

						<div className="about-text-block">
							<h2 id="about-beyond-title" className="about-title">About Beyond Bound</h2>
							<p className="about-description">
								Beyond Bound is formulated with premium Ayurvedic herbs, carefully selected for
								their ability to support your body&apos;s natural balance. Each ingredient is sourced
								from trusted suppliers and undergoes rigorous quality testing.
							</p>
						</div>

						<button type="button" className="about-learn-btn">
							<span className="about-learn-btn-text">Learn More</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutBeyond
