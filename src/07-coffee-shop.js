/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  if(size == "small" || size == "medium" || size == "large"){
    if(type == "regular" || type == "latte" || type == "cappuccino" ||type == "mocha"){
      if(size == "small"){
        // for small
        if(type == "regular"){
          // for small regular
          if(extras.whippedCream == true){
            return 3.50;
          }else if(extras.extraShot == true){
            return 3.75;
          }else if(extras.extraShot == true && extras.whippedCream == true){
            return 4.25;
          }else{
            return 3.00;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }

        }else if(type == "latte"){
          // for small latte
          if(extras.whippedCream == true){
            return 4.50;
          }else if(extras.extraShot == true){
            return 4.75;
          }else if(extras.extraShot == true && extras.whippedCream == true){
            return 5.25;
          }else{
            return 4.00;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }

        }else if(type == "cappuccino"){
          // for small cappuccino
          if(extras.whippedCream == true){
            return 5.00;
          }else if(extras.extraShot == true){
            return 5.25;
          }else if(extras.extraShot == true && extras.whippedCream == true){
            return 5.75;
          }else{
            return 4.50;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }
        }else{
          // for small mocha
          if(extras.whippedCream == true){
            return 5.50;
          }else if(extras.extraShot == true){
            return 5.75;
          }else if(extras.extraShot == true && extras.whippedCream == true){
            return 6.25;
          }else{
            return 5.00;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }
        }

      }else if(size == "medium"){
        // for medium
        if(type == "regular"){
          // for medium regular
          if(extras.whippedCream == true){
            return 4.50;
          }else if(extras.extraShot == true){
            return 4.75;
          }else if(extras.extraShot == true && extras.whippedCream == true){
            return 5.25;
          }else{
            return 4.00;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }
        }else if(type == "latte"){
          // for medium latte
          if(extras.whippedCream == true){
            return 5.50;
          }else if(extras.extraShot == true){
            return 5.75;
          }else if(extras.extraShot == true && extras.whippedCream == true){
            return 6.25;
          }else{
            return 5.00;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }
        }else if(type == "cappuccino"){
          // for medium cappuccino
          if(extras.whippedCream == true){
            return 6.00;
          }else if(extras.extraShot == true){
            return 6.25;
          }else if(extras.extraShot == true && extras.whippedCream == true){
            return 6.75;
          }else{
            return 5.50;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }
        }else{
          // for medium mocha
          if(extras.whippedCream == true){
            return 6.50;
          }else if(extras.extraShot == true){
            return 6.75;
          }else if(extras.extraShot == true && extras.whippedCream == true){
            return 7.25;
          }else{
            return 6.00;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }
        }
      }else{
        // for large
        if(type == "regular"){
          // for large regular
          if(extras.whippedCream == true){
            return 5.50;
          }else if(extras.extraShot == true){
            return 5.75;
          }else if(extras.extraShot == true && extras.whippedCream == true){
            return 6.25;
          }else{
            return 5.00;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }
        }else if(type == "latte"){
          // for large latte
          if(extras.extraShot == true && extras.whippedCream == true){
            return 7.25;
          }else if(extras.extraShot == true){
            return 6.75;
          }else if(extras.whippedCream == true){
            return 6.50;
          }else{
            return 6.00;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }
        }else if(type == "cappuccino"){
          // for large cappuccino
          if(extras.extraShot == true && extras.whippedCream == true){
            return 7.75;
          }else if(extras.extraShot == true){
            return 7.25;
          }else if(extras.whippedCream == true){
            return 7.00;
          } else{
            return 6.50;
            // ((Math.round(3 * 100)/100).toFixed(2))
          }
        }else{
          // for large mocha
          if(extras.extraShot == true && extras.whippedCream == true){
            return 8.25;
          }else if(extras.extraShot == true){
            return 7.75
          }else if(extras.whippedCream == true){
            return 7.50;
          }else{
            return 7.00;
          }
        }
      }
    }else{
      return -1;
    }
  }else{
    return -1;
  }
}
