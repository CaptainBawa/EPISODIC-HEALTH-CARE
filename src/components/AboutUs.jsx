import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the read more/less state
  const toggleReadMore = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const fullText = `Welcome to Boafo Adom Nyame Apple & Grapes Wholesale and Retail Enterprise—your premier source for the finest apples and grapes available on the market.
  With a rich heritage in the fruit industry and an unwavering commitment to quality, we pride ourselves on delivering exceptional produce that delights both wholesalers and individual consumers.
  Our journey began with a simple belief: that nature’s bounty deserves to be shared with the highest standards of excellence. Sourcing our fruits directly from trusted orchards and vineyards,
  we ensure that every apple and grape meets our rigorous quality benchmarks. From hand-picked harvesting to meticulous quality control, our process is designed to capture the true essence and
  flavor of each fruit, ensuring that you receive nothing but the best.`;

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
