import '../css/aboutBeyond.css'
import aboutImage from '../../Gemini_Generated_Image_9ceczi9ceczi9cec 1 (1).png'

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
							<svg
								className="about-pill-icon"
								viewBox="0 0 16 16"
								aria-hidden="true"
							>
								<path d="M8 0.75L9.86 5.22L14.68 5.62L11 8.73L12.12 13.5L8 10.87L3.88 13.5L5 8.73L1.32 5.62L6.14 5.22L8 0.75Z" />
							</svg>
							<span className="about-pill-text">100% Natural</span>
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