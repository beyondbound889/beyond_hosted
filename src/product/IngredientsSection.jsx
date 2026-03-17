import "./IngredientsSection.css"; // Importing the corresponding CSS file
import berberineImg from "./assets/berberine.png";
import gurmarImg from "./assets/gurmar.png";
import vijaysarImg from "./assets/vijaysar.png";

const ingredients = [
  {
    image: berberineImg,
    isHero: true,
    name: "Berberine",
    dosage: "500 mg",
    description: "Guides your cells to use glucose better",
  },
  {
    image: gurmarImg,
    isHero: false,
    name: "Gurmar",
    dosage: "80 mg",
    description: "Stops sugar rushing into your blood",
  },
  {
    image: vijaysarImg,
    isHero: false,
    name: "Vijaysar",
    dosage: "60 mg",
    description: "Keeps your insulin-making cells healthy",
  },
];

function IngredientsSection() {
  return (
    <div className="body-is">
      <section className="ingredients-container-is">
        <header className="header-is">
          <h2 className="title-is">Curated with Care.</h2>
          <h2 className="title-alt-is">Backed by Nature.</h2>
        </header>

        <div className="grid-is">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="card-outer-wrapper-is">
              <div className="card-bg-is"></div> {/* The Teal Shadow Element */}
              <div className="card-content-is">
                {ingredient.isHero && (
                  <span className="hero-badge-is">Hero Ingredient</span>
                )}
                <div className="img-container-is">
                    <div className="img-circle-is"></div>
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="ingredient-img-is"
                  />
                </div>
                <div className="content-is">
                  <h3 className="ingredient-name-is">{ingredient.name}</h3>
                  <p className="ingredient-dosage-is">{ingredient.dosage}</p>
                  <p className="ingredient-description-is">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default IngredientsSection;

