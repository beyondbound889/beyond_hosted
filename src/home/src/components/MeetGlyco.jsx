
import '../css/MeetGlyco.css'
import bottleImg from '../../Gemini_Generated_Image_iwrg9hiwrg9hiwrg (1) (5) 2-1.png'
import blurImg from '../../Blur.png'
import reviewImageOne from '../../image 32.png'
import reviewImageTwo from '../../image 33.png'
import reviewImageThree from '../../image 34.png'
import shopNowButtonImage from '../../Component 5 (1).png'

function MeetGlycomics() {
	return (
		<section className="glyco-section" aria-labelledby="glyco-hero-title">
			<div className="glyco-inner">
				<div className="glyco-content">
					<div className="glyco-left">
						<div className="glyco-proof">
							<div className="glyco-avatars" aria-label="Customer profile photos">
								<div className="glyco-avatar-shell">
									<img src={reviewImageOne} alt="Happy customer 1" className="glyco-avatar" loading="lazy" decoding="async" />
								</div>
								<div className="glyco-avatar-shell">
									<img src={reviewImageTwo} alt="Happy customer 2" className="glyco-avatar" loading="lazy" decoding="async" />
								</div>
								<div className="glyco-avatar-shell">
									<img src={reviewImageThree} alt="Happy customer 3" className="glyco-avatar" loading="lazy" decoding="async" />
								</div>
							</div>
							<div className="glyco-proof-copy">
								<div className="glyco-stars" aria-label="5 star rating">
									{Array.from({ length: 5 }).map((_, index) => (
										<span key={`star-${index}`} className="glyco-star-shell" aria-hidden="true">
											<svg
												viewBox="0 0 17 16"
												className="glyco-star-icon"
											>
												<path d="M8.5 0.9L10.4 5.66L15.53 6.03L11.61 9.41L12.89 14.35L8.5 11.45L4.11 14.35L5.39 9.41L1.47 6.03L6.6 5.66L8.5 0.9Z" />
											</svg>
										</span>
									))}
								</div>
								<p className="glyco-customers">
									<span className="glyco-customers-count">1k+</span>
									<span className="glyco-customers-text">Happy customers</span>
								</p>
							</div>
						</div>

						<h1 id="glyco-hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight break-words font-serif font-normal tracking-wide text-blue-950">
							Natural formation for
							<span className="block">you glucose</span>
						</h1>

						<div className="flex items-center gap-3 flex-wrap" aria-label="Pricing">
							<span className="line-through text-gray-400">₹2400</span>
							<span className="text-lg md:text-xl font-semibold">₹1925</span>
							<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
								Save 29%
							</span>
						</div>

						<button type="button" className="glyco-btn">
							<img
								src={shopNowButtonImage}
								alt="Shop now"
								className="glyco-btn-image"
								loading="lazy"
								decoding="async"
							/>
						</button>

						<p className="glyco-note">
							<span className="glyco-note-text">
								Book now for <span className="glyco-note-strong">free consultation</span> with the experts
							</span>
						</p>
					</div>

					<div className="glyco-right">
						<div className="glyco-product-wrap">
							<img
								src={blurImg}
								alt=""
								className="glyco-image glyco-image--blur"
								loading="lazy"
								decoding="async"
								aria-hidden="true"
							/>
							<img
								src={bottleImg}
								alt="Glycomics product bottle"
								className="glyco-image glyco-image--product"
								loading="lazy"
								decoding="async"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MeetGlycomics