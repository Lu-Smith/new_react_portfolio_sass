import React, { useState, useEffect } from 'react';

const InteractiveBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (event: any) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

  return (
    <svg 
    fill="#000000" 
    width="300px" 
    height="300px" 
    viewBox="-25.6 -25.6 307.20 307.20" 
    id="Flat" 
    xmlns="http://www.w3.org/2000/svg" >
    <g id="SVGRepo_bgCarrier" strokeWidth="0">
    <path
          transform="translate(-25.6, -25.6), scale(9.6)"
          d={`M16,29.855058834348853C18.047182841244442,30.16326404534096,20.181075078921317,30.458584258479416,22.14262078080952,29.796552161846414C24.145185998931012,29.120675760536415,26.406136413109532,28.039487333042278,27.192304791551567,26.07759649932712C28.041957760280827,23.957279253176644,25.505739543147186,21.48694342915285,26.32662680335401,19.355324444056375C27.216915355286787,17.043489346218685,31.193425127930816,16.77200242528179,31.70902437608406,14.348915006181816C32.15971922905438,12.230849411639074,30.307538570776607,10.047778691774482,28.586922952639163,8.732936645024704C26.87598142685115,7.425487244982934,24.062518256803777,8.562586385387252,22.37940417900322,7.219503424641722C20.579268644542616,5.783040266704143,21.092653736996127,2.42991183964563,19.145985016006467,1.1993041697279416C17.35350687104985,0.06616973881048005,14.888581985508115,0.6009444328553559,12.853676499665045,1.1977117261645116C10.860501205975993,1.7822409995782573,8.476387380909255,2.637841997639949,7.688012465287375,4.559530634039778C6.7684819691179925,6.800915120401735,10.03342111173654,9.78403229530413,8.546456898885634,11.69669488415514C6.715207778898428,14.052206639176141,1.5764503295487944,11.739157890351098,0.09356687828777588,14.328166510937798C-1.0369366352709946,16.3019449219911,2.469581382987511,18.124632006453083,3.813827791479225,19.959527372234454C4.8525777430478385,21.377420297444097,6.022377626092798,22.62005598965778,7.153700543643788,23.965243807572907C8.319259187514179,25.351139261891287,9.121786346152447,27.059608190242795,10.629124041096402,28.063184911775522C12.217439324797432,29.12067604367233,14.113114766566362,29.57098657183673,16,29.855058834348853`}
          fill={`rgba(${mousePosition.x / window.innerWidth * 255}, ${mousePosition.y / window.innerHeight * 255}, 0, 1)`}
          strokeWidth="0"
        />
    </g>
    </svg>
  );
};

export default InteractiveBackground;