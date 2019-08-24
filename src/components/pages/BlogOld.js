
import React, { Component }  from "react";
import Grid, {Container, Row, Col} from "../Grid";
import Wrapper from "../Wrapper";
import Title from "../Title";
import FriendCard from "../FriendCard";
import friends from "../../friends.json";
import Prtf from "../Prtf";
var pdqxyz = "SuperCaliFragilistic";
var currentOcc
// NEED TO HAVE BUTTONS TO SELECT VALUE FOR var abcdefg

//var cat;
class BlogOld extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  /*changeOcc1 = () => {
    this.setStatecurrentOcc = "Cook";
  }

  changeOcc2 = () => {
    currentOcc = "Owner";
  }
  
  changeOcc3 = () => {
    currentOcc = "Cashier";
  }

  changeOcc4 = () => {
    currentOcc = "All"
  }*/

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
   // const friends = this.state.friends.filter(friend => friend.id !== id);
// Set this.state.friends equal to the new friends array
    this.setState({ friends });
  }; 
  
  renderCatFriends = occupation => {
    
  }

render() {
  return (
    <Wrapper>
    <Container>
      <Title>{pdqxyz}</Title>
      <Row><Col size="lg-3 md-2 xs-1"></Col>
        <Col size="lg-6 md-8 xs-10"></Col>
        <Prtf></Prtf>
        <button
          type="button"
          onClick={this.changeOcc1}
        >Change color</button>
        <button
          type="button"
          onClick={this.changeOcc2}
        >Change color</button>
        <button
          type="button"
          onClick={this.changeOcc3}
        >Change color</button>
        <Col size="lg-3 md-2 xs-1"></Col>
      </Row>
      
     <Row>
      {this.state.friends.filter(friend => friend.occupation === currentOcc).map(friend =>  (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
                        
          />
        ))}
        {console.log("What is it? ", currentOcc)}
        </Row>
        </Container>
    </Wrapper>
  );
}
}
export default BlogOld;

/*const Blog = () => (
  <div>
    <h1>Blog Page</h1>
    <p>
      Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque
      turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat.
      Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum
      nunc, sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi justo
      laoreet risus, luctus luctus mi lacus sit amet libero. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
      lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat
      accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque vehicula sit
      amet at augue. Maecenas aliquam bibendum congue. Pellentesque semper, lectus non ullamcorper
      iaculis, est ligula suscipit velit, sed bibendum turpis dui in sapien.
    </p>
  </div>
);

export default Blog;*/
