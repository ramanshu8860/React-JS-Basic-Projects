Important Points:

1) We have used the title Attribute in Button.jsx file.
It helps us when we hover the button the content which will be written in title attribute, it will show in tooltip

2) Event Handling or Event Listener are applied on HTML elements or JSX elements.
We can't apply Event Handling directly it to Components.
If we will try to directly apply it on Components then it will pass as props or argument of funciton/Component in which we have applied it.

So to apply Eventhandling directly on Component we pass as a prop and then we will reciece it in function then we have to apply on HTML/JSX elements.

3) We have applied the EventListener on Buttons but still when we press button it will not change.
It is because the React is not Re Rendering the values but if we console log the left apples and 
right apples and checked in console the button is working fine.
because React intially Render the whole component, to Re Render it AppleCounter.jsx has to be reload again or to re-render or to handle the changed variable we will use useState Hook in it.