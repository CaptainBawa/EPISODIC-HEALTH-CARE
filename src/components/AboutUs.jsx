import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the read more/less state
  const toggleReadMore = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const fullText = `Episodic health care center is a registered herbal clinic
  established to deliver quick and quality health services through the use of traditional and holistic approach,
  it was established in the year 2012 on the soil of Dunkwa On Offin in the Upper Denkyira East municipality by collaboration of 4
  holistic and alternative health care practitioners. We are able to manage and treat many of the diseases
  and disorders affecting the normal functioning of human system through the use of unified efficacious and registered herbal
  and alternative medicine. We also run the following services to our client who always choose us as their treatment center:
  1. Ultrasound/Scan.
  2. Laboratory.
  3. Detoxification.
  4. Physiotherapy center.
  5. Dietary Advice.
  We have our own manufacturing facility where our herbal medicine are also produced and packaged for our clients.
  We produce many herbal products into the market base from time to time for the public especially to those who find it difficulty
  to reach us for our services. We are located at Dunkwa On Offin adjecent to the old E.C.G office near kyekyewere station.
  We work from Monday - Saturday from 7:00am - 5:00pm.`;

  // Define how many characters to show when not expanded
  const charLimit = 250;

  // Determine what to display based on the state
  const displayedText = isExpanded ? fullText : fullText.substring(0, charLimit);

  return (
    <div id="about">
      <h2>About Us</h2>
      <p>
        {displayedText}
        {fullText.length > charLimit && (
          <span
            role="button"
            tabIndex={0}
            onClick={toggleReadMore}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleReadMore();
              }
            }}
          >
            {isExpanded ? ' Read Less' : '... Read More'}
          </span>
        )}
      </p>
    </div>
  );
};

export default About;
