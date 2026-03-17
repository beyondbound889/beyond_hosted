import './SoundFamiliar.css';
import { AlertCircle, Candy, ShieldCheck, ZapOff, Cookie, Moon, Shield, Battery } from 'lucide-react';


const data = [
  { icon: AlertCircle, label: 'Energy crashes after meals' },
  { icon: AlertCircle, label: 'Constant sugar cravings' }, // Swapped to a Lucide icon
  { icon: Shield, label: 'Fatigue' },
  { icon: Battery, label: 'Belly fat that won\'t move' }, // Swapped to Lucide
  { icon: Battery, label: 'Feeling heavy after carbs' }, // Swapped to Lucide
  { icon: Battery, label: 'Restless sleep' },              // Swapped to Lucide
];

function SoundFamiliar() {
  return (
    <div className='body-sf'>

  
    <div className="container-sf">
      <header className="header-sf">
        <h1 className="title-sf">Sound familiar?</h1>
        <p className="subtitle-sf">Your Blood Sugar Is, Trying To Tell You Something.</p>
      </header>

      <div className="grid-sf">
        {data.map((item, index) => {
          // 1. Assign the icon to a Capitalized variable
          const IconComponent = item.icon;

          return (
            <div key={index} className="card-wrapper-sf">
              <div className="card-bg-sf"></div>
              <div className="card-content-sf">
                <div className="icon-circle-sf">
                  {/* 2. Render it as a component if it's not a string */}
                  {typeof IconComponent === 'string' ? (
                    IconComponent
                  ) : (
                    <IconComponent size={20} strokeWidth={2.5} />
                  )}
                </div>
                <p className="card-text-sf">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <footer className="footer-sf">
        <p>
          These aren't random feelings! they're your body's way of signalling that your glucose 
          metabolism needs support. The good news? <strong>It's fixable.</strong>
        </p>
      </footer>
    </div>
      </div>
  );
}
export default SoundFamiliar;