// const domContainer = document.querySelector("#root");
// const root = ReactDOM.createRoot(domContainer);
// root.render(React.createElement("h1", {}, "Our First React page has rendered"));

class App extends React.Component {
   render() {
       return React.createElement(
           'h1',
           {},
           "Hello World!"
       );
   }
}
// select the root and render the “App” component we defined earlier
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
// const domContainer = document.querySelector("#root");
// const root = ReactDOM.createRoot(domContainer);
// root.render(<h1>Hello World!</h1>);