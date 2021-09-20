let FancyBorder = (props) => {
  return (
    <div className={'FancyBorder, FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
};

let Dialog = (props) => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
};

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome on the board, ${this.state.login}`);
  }

  render() {
    return (
      <Dialog title="Program developer Mars" message="Who are you?">
        <input value={this.state.login} />
        <button onClick={this.handleSignUp}>Registration me!</button>
      </Dialog>
    );
  }
}

ReactDOM.render(<SignUpDialog />, document.getElementById('root'));
