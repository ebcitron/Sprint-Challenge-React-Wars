# Answers

1.  What is React JS and what problems does it try and solve?

React is a javascript library that helps with component reusability in order to create better user interfaces and single page apps. It does this with a virtul dom layer.

1.  What does it mean to _think_ in react?

Thinking in react means looking at your app in terms of what layers it needs, where the components lay in terms of the family tree, which need to hold state, and which will need props based off of state. It means thinking of things as reusible components and smaller pieces of UI used to build out the app.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class components have their own state, are extensions of the react.component, and can use its methods, while functional components take in props, and dont deal with any of the components lifecycle methods.

1.  Describe state.

State is the condition of the data you declare in your constructor in a class component. It can be changed and it is often called the heart of the application because components render things to reflect its condition.

1.  Describe props.

Props are the propertys of a component. They can be derived off of the state. It is how you pass the states condition throughout other components and is called the blood of the application.
 