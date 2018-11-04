class Destructured extends React.Component {
    render() {
      const { name, sport, popularity } = {...this.props };
      return (
        <div>
          <h2>Personal Info</h2>
          <p>{name}</p>
          <p>{sport}</p>
          <p>{popularity}</p>
        </div>
      );
    }
  }
  
  class ExampleComponent extends React.Component {
    clickHandler() {
      console.log('Fired');
    }
  }
  
  class RenderComponent extends ExampleComponent {
    render() {
      return (
        <div>
          <button onClick={this.clickHandler.bind(this)}>Click me!</button>
        </div>
      )
    }
  }
  
  const Child = (props) => {
    const params = {
      name: "f",
      sport: "Football",
      popularity: "High"
    }
    return (
      <div>
        <h2>{props.title}</h2>
        <GrandChild name="Grand Child Component"/>
        <Destructured {...params}/>
        <RenderComponent/>
      </div>
    )
  }
  
  const GrandChild = (props) => {
    return (
      <div>{props.name}</div>
    )
  }
  
  
  class App extends React.Component {
    
    render() {
      return(
        <div>
          <h2>And this is our root component</h2>
          <Child title="Child Component"/>
        </div>
      )
    }
  }
  
  
  const element = <App/>
  ReactDOM.render(element, document.getElementById('root'));