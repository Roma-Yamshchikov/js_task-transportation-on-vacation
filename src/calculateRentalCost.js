/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount7Days = 50;
  const discount3Days = 20;
  const sum = days * 40;

  if (days >= 7) {
    return sum - discount7Days;
  }

  if (days >= 3) {
    return sum - discount3Days;
  }

  return sum;
}

module.exports = calculateRentalCost;
