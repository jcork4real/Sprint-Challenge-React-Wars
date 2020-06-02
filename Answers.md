# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

Although RJS is argued by many with being closer to a framework, RJS is in fact an open source library. Additionally, RJS allows developers to not only divide their projects into components, but also eliminate mplement JavaScript and HTML-eque syntax(JSX) within the same file. This in turn would allow projects to be developed quickly since you would have less pages to refer to simultaneiously. RJS as the name implies , responds to data changes instantly and renders components for a better user experience.

2. Describe component state.

   State is data. State is an object that determines how a specific component renders and behaves. State is what allows you to create components that are dynamic and interactive. We tell the Virtual DOM which elements and state(data) render to the actual DOM. Beyond that, it will "react" when the state(data) in our app changes, and will update the DOM accordingly by itself.

3. Describe props.

    When we want to pass component state inside one component to another component, we pass them as props. Props data are read-only which keeps data flow clean and organized.


4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

        Side effects are anything that effects something outside the scope of the function being executed. Grabbing data from an API, and manually manipulating the DOM are all examples of side effects.

        The useEffect hook syncs effects in a react compoonent to changes of a certain state.


