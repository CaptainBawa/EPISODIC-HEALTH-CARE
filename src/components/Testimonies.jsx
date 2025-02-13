import React, { useState } from 'react';

const Testimonies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonies = [
    {
      id: 1,
      name: 'Aisha',
      text: `My 19 year old daughter, Fatima, battled relentless fever and fatigue from malaria.
      She barely ate, and I feared hospital stay. A friend recommended Manu Mixture
      and within days, her fever FcBrokenLink, and her appetite returned, gaining strength naturally.`,
    },
    {
      id: 2,
      name: 'Kwame Ansah',
      text: `I contracted malaria while traveling, and my appetite vanished completely. A local healer introduced me to Manu Mixture.
      Within 48 hours, my chills stopped, and the mixture’s gentle herbal taste sparked my hunger again. I avoided harsh meds and
      regained my strength naturally. Manu Mixture is now my go-to remedy`,
    },
    {
      id: 3,
      name: 'Yaa Mansah',
      text: `My entire household battled typhoid last rainy season. My youngest couldn’t keep food down, and we were desperate. A neighbor shared Manu Mixture.
      We drank it daily—fevers broke, energy surged, and even my picky eater asked for meals! This blend saved us without a single pill`,
    },
    {
      id: 4,
      name: 'Frank Obeng',
      text: `As a teacher surrounded by germs, I used to catch every cold and flu. Since taking Manu Lita Mixture, my immune system feels bulletproof! This winter, I didn’t
      miss a single day of work. Even my seasonal allergies vanished. My secret? A daily spoonful of this earthy-sweet tonic. It’s like armor for the body.`,
    },
    {
      id: 5,
      name: 'Hannah Asante',
      text: `After my baby, I was drained and sick nonstop. A midwife recommended Manu Lita Mixture for immune support,
      it gently restored my strength. I’m finally keeping up with my toddler and staying healthy. This mix is a mama’s lifesaver.`,
    },
    {
      id: 6,
      name: 'Winifred Agyemang',
      text: `For years, my periods left me bedridden with cramps so severe I’d miss work. Painkillers only dulled the agony temporarily.
      A friend suggested Manu Spakan Mixture, From the first cycle, the spasms eased, and I could function again! Now I drink it daily during my period.
       It’s not just relief—it’s liberation. Thank you for giving me my life back.`,
    },
    {
      id: 7,
      name: 'Agartha Osei',
      text: `After childbirth, my periods returned with heavy bleeding and mood swings. Manu Spakan Mixture became my sanctuary.
      It lightened the flow, stabilized my energy, and soothed my nerves. I’m now a calmer mom and a stronger woman. Every uterus deserves this kind of care.`,
    },
    {
      id: 8,
      name: 'Collins Dapaah',
      text: `At 45, stress and late nights left me drained—physically and intimately. I dreaded gym sessions and felt disconnected from my wife. Manu Lippan Mixture changed everything.
      Within weeks, my energy skyrocketed, and my focus sharpened. My wife jokes that I’ve ‘rewound the clock.’ Now I’m crushing work deadlines and rekindling romance. This mix isn’t just a supplement—it’s a lifeline.`,
    },
    {
      id: 9,
      name: 'Samuel Stone',
      text: `Low testosterone made me feel invisible. I avoided social events and doubted myself daily. My sister gifted me Manu Lippan Mixture.
      Slowly, my confidence returned—my workouts intensified, and I started dating again. Last month, I landed a promotion and a second date.
      This mix didn’t just boost my vitality—it rebuilt my spirit.`,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  };

  // Keyboard accessibility for dots
  const handleDotKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveIndex(index);
    }
  };

  return (
    <div className="testimonies">
      <h2>Testimonies</h2>
      <div className="slider-wrapper">
        <div
          className="testimonies-container"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonies.map((testimony) => (
            <div className="testimony" key={testimony.id}>
              <h3>{testimony.name}</h3>
              <p>{testimony.text}</p>
            </div>
          ))}
        </div>
        <button type="button" className="slider-arrow prev" onClick={handlePrev}>&#10094;</button>
        <button type="button" className="slider-arrow next" onClick={handleNext}>&#10095;</button>
      </div>
      <div className="dots-container">
        {testimonies.map((_, index) => (
          <button
            onKeyDown={(e) => handleDotKeyDown(e, index)}
            role="tab"
            type="button"
            key={`${index + 1}`}
            aria-label={`Testimony ${index + 1}`}
            aria-selected={index === activeIndex}
            tabIndex={0}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
