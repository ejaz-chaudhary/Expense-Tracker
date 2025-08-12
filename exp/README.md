# MoneyMonitor - Expense Tracker

A simple, elegant web-based expense tracker application built with vanilla JavaScript, HTML5, and CSS3. Track your income and expenses with an intuitive interface and persistent local storage.

## 🚀 Features

- **Real-time Balance Tracking**: Instantly see your current balance based on income and expenses
- **Transaction Management**: Add, edit, and delete transactions with ease
- **Visual Indicators**: Color-coded income (green) and expenses (red) for quick identification
- **Search Functionality**: Search transactions by title, date, or transaction type
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Persistent Storage**: All data is saved locally in your browser
- **Beautiful UI**: Modern gradient background with elegant typography
- **Modal Forms**: Clean modal interface for adding/editing transactions
- **Confirmation Dialogs**: SweetAlert integration for delete confirmations

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (ES6+)**: Vanilla JavaScript for all functionality
- **Bootstrap 5**: Responsive grid system and components
- **Font Awesome**: Icons for UI elements
- **SweetAlert**: Beautiful alert dialogs
- **Animate.css**: Smooth modal animations
- **Google Fonts**: Inter and Imperial Script fonts

## 📁 Project Structure

```
MoneyMonitor/
├── index.html          # Main HTML file
├── css/
│   └── main.css        # Custom styles
├── js/
│   └── main.js         # Core JavaScript functionality
└── README.md           # This file
```

## 🎯 How to Use

### Adding a Transaction
1. Click the **"Add Transaction"** button
2. Select transaction type:
   - **CR** (Credit) for income
   - **DR** (Debit) for expenses
3. Enter a descriptive title
4. Enter the amount
5. Click **Submit**

### Managing Transactions
- **Edit**: Click the blue edit icon (pencil) to modify a transaction
- **Delete**: Click the red delete icon (trash) to remove a transaction
- **Search**: Use the search bar to filter transactions by title, date, or type

### Understanding the Dashboard
- **Balance**: Your current net balance (Income - Expenses)
- **Income**: Total of all credit transactions
- **Expense**: Total of all debit transactions
- **History**: Complete list of all transactions with details

## 🎨 Design Features

- **Gradient Background**: Beautiful linear gradient from pink to mint
- **Typography**: Combination of Inter and Imperial Script fonts
- **Color Coding**: 
  - Green for income and positive balance
  - Red for expenses and negative balance
- **Responsive Table**: Scrollable transaction table on mobile devices
- **Modal Animations**: Smooth zoom-in effect for the transaction modal

## 🔧 Local Development

1. **Clone or download** the project files
2. **Open** `index.html` in any modern web browser
3. **No build process** required - it's ready to use!

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💾 Data Storage

All transaction data is stored locally in your browser using **localStorage**. This means:
- ✅ Data persists even after closing the browser
- ✅ No internet connection required
- ✅ Privacy - data stays on your device
- ❌ Data won't sync across devices
- ❌ Clearing browser data will remove all transactions

## 🚧 Future Enhancements

Potential features for future versions:
- Export transactions to CSV/PDF
- Category-based expense tracking
- Monthly/yearly reports and charts
- Budget setting and alerts
- Multi-currency support
- Cloud sync capabilities
- Dark mode toggle

## 🐛 Known Issues

- Date formatting displays day of the week instead of the actual date
- No validation for duplicate transactions
- Limited to single currency (₹ - Indian Rupees)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements. This is a learning project, so suggestions and enhancements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created as a learning project to demonstrate vanilla JavaScript skills and modern web development practices.

---

**Happy Tracking!** 📊💰
