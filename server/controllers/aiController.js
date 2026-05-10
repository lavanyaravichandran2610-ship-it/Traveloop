export const generatePlan = async (req, res) => {
  const { destination, days, budget, interests } = req.body;

  const plan = Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    title: `Explore ${destination} Day ${i + 1}`,
    activities: [
      `Visit top places in ${destination}`,
      `Enjoy ${interests || "local experiences"}`,
      `Try food & explore city`,
    ],
    estimatedCost: Math.round(budget / days),
  }));

  res.json({ destination, plan });
};