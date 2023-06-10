// require('@babel/register')({
//   presets: ['@babel/preset-react']
// });

const React = require('react');
const ReactDOMServer = require('react-dom/server');

// function MyComponent(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//     </div>
//   );
// }

// const myComponentMarkup = ReactDOMServer.renderToString(
//   <MyComponent title="Hello" content="World" />
// );

// console.log(myComponentMarkup);

const myElement = React.createElement('div', null, 'Hello World');
console.log(myElement);

const myElementString = ReactDOMServer.renderToString(myElement);
console.log(myElementString);