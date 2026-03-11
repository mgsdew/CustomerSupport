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
