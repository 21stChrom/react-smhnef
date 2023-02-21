import react from 'react';

<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<div id="root"></div>

<script type="text/babel">

class PictureInPicture extends React.Component {
  constructor() {
    super();

    this.state = {
      isPictureInPictureOpen: false
    };
  }

  handlePictureInPictureClick = () => {
    this.setState({
      isPictureInPictureOpen: !this.state.isPictureInPictureOpen
    });
  };

  render () {
    return (
      <div className="container">
        <div className="content">
          {!this.state.isPictureInPictureOpen && (
            <img src="https://picsum.photos/200" />
          )}
        </div>
        <button onClick={this.handlePictureInPictureClick}>
          Start/ Stop Picture in Picture
        </button>
      </div>
    );
  }
};

ReactDOM.render(<PictureInPicture />, document.getElementById('root'));

</script>