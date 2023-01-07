import React, { useState } from "react";

function App() {
  const [clickThroughRate, setClickThroughRate] = useState(2);
  const [conversionRate, setConversionRate] = useState(2);
  const [impressions, setImpressions] = useState(1000);
  const [dollarsSpent, setDollarsSpent] = useState(5);

  let siteClicks = impressions * (clickThroughRate / 100);
  let siteConversions = siteClicks * (conversionRate / 100);
  let costPerConversion =
    Math.round(1000 * (dollarsSpent / siteConversions)) / 1000;

  return (
    <div>
      <h1>ad-cost per sale</h1>
      <h2>cost: ${costPerConversion}</h2>
      <label htmlFor="">click through rate (ctr)</label>
      <input
        value={clickThroughRate}
        onChange={(e) => setClickThroughRate(e.target.value)}
        placeholder="click through rate (ctr)"
        type="text"
      />

      <label htmlFor="">conversion rate</label>
      <input
        value={conversionRate}
        onChange={(e) => setConversionRate(e.target.value)}
        placeholder="conversion rate"
        type="text"
      />

      <label htmlFor="">impressions</label>
      <input
        value={impressions}
        onChange={(e) => setImpressions(e.target.value)}
        placeholder="impressions"
        type="text"
      />

      <label htmlFor="">dollars spent</label>
      <input
        value={dollarsSpent}
        onChange={(e) => setDollarsSpent(e.target.value)}
        placeholder="dollars spent"
        type="text"
      />
    </div>
  );
}

export default App;
