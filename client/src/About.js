import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import axios from "axios";

function About() {
  return (
    <div>
      <div className="navDiv">
        <Link to="/" className="customLink">
          Home
        </Link>
        <Link to="/aboutus" className="customLink">
          About
        </Link>
        <Link to="/features" className="customLink">
          Features
        </Link>
        <Link to="/room" className="customLink">
          Room-Order
        </Link>
        <Link to="/food" className="customLink">
          Food-Order
        </Link>
        <Link to="/detail" className="customLink">
          Order-Detail
        </Link>
      </div>
      <div className="aboutzBodyDiv">
        <h1>Restaurant Business</h1>
        <p>
          When visitors go to your website, the first place they go is your
          landing page. If they have an interest past your landing page, they
          will probably go to your “About Us” page to learn more. When a website
          visitor decides to go to the “About Us” page for your Restaurant
          business, he or she is on a fact-finding mission, as well as looking
          for the “story” of your Restaurant business. It’s crucial that your
          “About Us” page says what goods or services your Restaurant business
          provides.
        </p>
        <h1 className="">Include In The About-Us Page</h1>
        <p>
          Your experience of starting the journey and continuing it with
          excellence over the years will have to be included in the page. The
          different cuisines available in your restaurants must be clearly
          mentioned on the page so that customers can easily understand your
          specialization. The address and contact number or any other details
          about contact must be included on the page. The opening and closing
          times of the restaurant must be clearly mentioned in as simple a way
          as possible so that customers can visit accordingly. The reviews of
          some of the previous customers happy with the food and your service
          art h restaurant must be mentioned so that new customers are
          attracted.
        </p>
        <h1>Readymade Restaurant Business</h1>
        <p>
          {" "}
          When visitors go to your website, the first place they go is your
          landing page. If they have an interest past your landing page, they
          will probably go to your “About Us” page to learn more. When a website
          visitor decides to go to the “About Us” page for your Restaurant
          business, he or she is on a fact-finding mission, as well as looking
          for the “story” of your Restaurant business. It’s crucial that your
          “About Us” page says what goods or services your Restaurant business
          provides.
        </p>
        <h1>Organization Detail</h1>
        <p>
          The glass divider confronting the sea, unbiased shades, finished
          dividers, and excellent fine art, just as lavish tablecloths and
          seats, all contribute toward an extravagant ordeal. The earthenware
          and cutlery are just delightful. Template: 5 ‘Organization Name’
          ‘Organization Name ‘ is additionally home to the amazing Table-Side
          Caesar Spun Signature Salad, specially made tableside from a rundown
          of 10 fixings including blue cheddar, shrimp, olives, banana peppers,
          anchovies. And our homemade mystery Caesar dressing. Other housetop
          choices are our Grilled or Chilled Shrimp, new walleye conveyed every
          day from Red Lake Nation in Minnesota, and house-ground steak burgers.
          Our menu offers something for everybody, from the light passage of
          plates of mixed greens and little nibbles to the inconceivable T Bone
          steak. Our steaks are sliced in-house to guarantee flawlessness and
          expertly barbecued at 2,000 degrees. We will probably give excellent
          client benefit, the best quality fixings, and a noteworthy affair
          whether it’s an uncommon occasion, easygoing social event of
          companions or a sentimental night out on the town. Organization Name
          is situated in downtown Wayzata, straightforwardly opposite lofty Lake
          Minnetonka. Extraordinary administration and a fun vibe keep local
          people returning and guests raving.
        </p>
      </div>
    </div>
  );
}
export default About;
