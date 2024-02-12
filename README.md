# Invoice Generator using JavaScript

This project is an invoice generator built using HTML, CSS, and JavaScript. It allows users to input customer details, add products with their quantities and amounts, calculate the total, apply GST (Goods and Services Tax), and calculate the net amount. The interface is designed using Bootstrap for a clean and responsive layout.

## Index

- [Invoice Generator using JavaScript](#invoice-generator-using-javascript)
  - [Index](#index)
  - [How to Use](#how-to-use)
  - [JavaScript Fundamentals Used](#javascript-fundamentals-used)
  - [Contributing](#contributing)
  - [License](#license)

## How to Use

1. **Clone the Repository**: Clone this repository to your local machine using `git clone https://github.com/yourusername/invoice-generator.git`.

2. **Open the Project**: Navigate to the project directory and open `index.html` in your web browser.

3. **Fill in Customer Details**: Enter the required customer details such as name, address, email, and billing address.

4. **Add Products**: Click the "+" button to add products. Enter the product name, quantity, and amount for each product.

5. **Calculate Total**: The total for each product will be automatically calculated based on the quantity and amount entered.

6. **Calculate Net Amount**: Once all products are added, the total of all products, GST, and net amount will be calculated automatically.

7. **Print Invoice**: Click the "Print" button to print the generated invoice.

8. **Reset**: To start over, click the "Reset" button to clear all fields and start fresh.

## JavaScript Fundamentals Used

- **Event Handling**: Utilized event listeners to handle user interactions such as adding products, input changes, and deleting items.
- **DOM Manipulation**: Dynamically added and removed HTML elements to display product details and update totals.
- **Data Calculation**: Performed calculations to determine the total amount for each product, total of all products, GST, and net amount.
- **Conditional Statements**: Implemented conditional statements to validate inputs and control flow.
- **Functions and Scope**: Defined functions for calculating totals, handling inputs, and updating values, ensuring modularity and readability.
- **Arrays**: Used arrays to store product totals and calculate the overall total of all products.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
