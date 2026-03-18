import React from 'react';
import './Research.css';

const Research = () => {
  const tags = [
    'WHO-GMP', 'AYUSH', 'ISO', 'HACCP', 'Non-GMO', 'GC-MS'
  ];

  const cards = [
    {
      id: 'clinical',
      tag: 'IN PROGRESS',
      title: 'Clinical trial — Somaiya Hospital',
      desc: 'A formal study of Glycomics as a complete formulation is underway — testing the product in real patients, not just individual ingredients. Results will be published on completion.'
    },
    {
      id: 'purity',
      tag: 'PURITY STANDARD',
      title: '97.2% standardised Berberine',
      desc: 'Confirmed by Gas Chromatography–Mass Spectrometry. This level of analytical rigour eliminates batch-to-batch inconsistency — rare in Ayurvedic supplements.'
    },
    {
      id: 'manufacturing',
      tag: 'MANUFACTURING',
      title: 'WHO-GMP facility · NABL accredited lab',
      desc: 'The same global standard applied to pharmaceutical drugs. Every batch undergoes HPLC analysis and full quality validation before release.'
    }
  ];

  return (
    <section className="science-research">
      <h2 className="section-title text-center">Research & validation</h2>
      
      <div className="research-container">
        <div className="research-left">
          <h3 className="research-number">200</h3>
          <h4 className="research-subtitle">
            Peer-reviewed studies on<br/>
            Berberine
          </h4>
          <p className="research-desc">
            Including human clinical trials — not just in-vitro work. The evidence base is among the strongest for any botanical compound in metabolic health.
          </p>
          
          <div className="research-tags">
            {tags.map(tag => (
              <div className="research-tag" key={tag}>
                <span className="checkmark">✓</span> {tag}
              </div>
            ))}
          </div>
        </div>
        
        <div className="research-right">
          <div className="research-cards">
            {cards.map(card => (
              <div className="research-card" key={card.id}>
                <div className="research-card-tag">{card.tag}</div>
                <h5 className="research-card-title">{card.title}</h5>
                <p className="research-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
