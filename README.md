# ui-components


## Description
This project contains two simple and reusable React UI components styled with TailwindCSS:

1. *InputField* – A reusable text input component with label, placeholder, and onChange support.  
2. *DataTable* – A simple table component to display tabular data dynamically.  

These components can be used in any React project.

---

## Components Overview

### InputField
- Props:
  - label – Text label above the input
  - value – Current value of the input
  - onChange – Function to handle input changes
  - placeholder – Placeholder text
- Usage:
```jsx
<InputField
  label="Enter Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Type here..."
/>

(data table);
Props:

columns – Array of column names

data – Array of objects representing table rows

Usage:

<DataTable
  columns={["Name", "Age"]}
  data={[{ Name: "John", Age: 28 }, { Name: "Jane", Age: 32 }]}
/>
Setup Instructions
Option 1: Using locally with React + Tailwind
Clone the repository:

step:
git clone https://github.com/<your-username>/ui-components.git
cd ui-components
Install dependencies:

step:
npm install
Initialize TailwindCSS (if not already):

step:
npx tailwindcss init -p
Start the development server:

step:
npm start
Open http://localhost:3000 in your browser.




(FOLDER STRUCTURE): 
ui-components/
├── InputField/
│   ├── InputField.js
│   └── InputField.css
├── DataTable/
│   ├── DataTable.js
│   └── DataTable.css
└── README.md





APPROACH:
Functional React components for reusability

TailwindCSS for clean, responsive design

Components are generic and easy to integrate into any project

Each component has its own folder and styling file for scalability
