// The point is difference between <Post> and <Post />

const getDefaultStyledPost = (defaultStyle) => {
  /* TODO */
  return (
    class Post extends Component {
      render() {
        const style = {...defaultStyle, ...this.props.style}
        return (
          <p style={style}></p>
        );
      }
    }
  );
}
