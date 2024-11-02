/* const currentDate = new Date();
console.log(currentDate); // Output: current date and time
 */

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-indexed
const year = currentDate.getFullYear();

const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate); // Output: e.g., "2-11-2024"
