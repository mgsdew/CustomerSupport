# CS — Ticket System

A simple and responsive ticket management dashboard built with React.

**Live Deployment:** [https://customerticketsupport.netlify.app/](https://customerticketsupport.netlify.app/)

---

## Business Logic & Features

This application provides a streamlined interface for managing customer support tickets with the following workflow:

1.  **View Tickets:** All available customer tickets are displayed in a grid.
2.  **Start Task:** Clicking a ticket card moves it to the "In-Progress" state.
    - A toast notification confirms the action.
    - The ticket is added to the "Task Status" panel.
    - The "In-Progress" count in the banner is incremented.
3.  **Complete Task:** Clicking the "Complete" button on a task marks it as resolved.
    - A toast notification confirms the action.
    - The ticket is removed from the main ticket grid and the "In-Progress" list.
    - The "Resolved" count in the banner is incremented.
    - The ticket appears in the "Resolved Tasks" list with a visual strikethrough.

---

## Tech Stack & Tools

- **React:** Core UI library, utilizing Hooks (`useState`, `use`) for state management and side effects.
- **Vite:** Frontend tooling for a fast development server and optimized production builds.
- **Tailwind CSS:** A utility-first CSS framework for rapid and custom styling.
- **daisyUI:** A component library for Tailwind CSS to quickly build out UI elements.
- **React Toastify:** For providing user-friendly, non-blocking notifications.
- **Font Awesome:** Used for icons throughout the application.
- **ESLint:** For code linting to ensure code quality and consistency.

---

## Follow-up Questions


# What is JSX, and why is it used?
Answer: JSX stands for JavaScript XML, where in React we use JSX files for keeping HTML elements to describe what the UI should look like while keeping the logic and markup in one place. 


# What is the difference between State and Props?

Answer: In React we used State as an internal data exchange within a component that value can be changed over time, whereas Props (short from of properties) are read-only data used for passing data from a parent to a child component.

# What is the useState hook, and how does it work?
Answer: useState hook is a function that allow us to add React state to functional components by returning the current state value and a function to update it. For example below is a example of hook where declared a state for counting number which allows to track a number and update it via 'setCount(count + 1)'

'const [count, setCount] = useState(0)'


# How can you share state between components in React?
Answer: We can share State by lifting it up to the closest common parent, which then passes it down via props. For an example in this site, inProgressTickets declared in App component and is passed to both Banner and Tasks components.



# How is event handling done in React?
Answer: In React we handles events using props like onClick, where handler functions are defined in the parent and passed down as props so child components which can trigger state changes. For example, clicking a child component like 'ticket card' using onAddTicket from App component. 
