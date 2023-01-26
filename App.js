import logo from './logo.svg';
import './App.css';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Salman',
//   lastName: 'Arshad'
// };
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }
// const element = (
//   <h1>
//     Hello, {getGreeting(user)}!
//   </h1>
// );
// const element = <a href="https://www.reactjs.org"> link </a>;
// const element = <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>;
// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;
// const element = react.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
function concat(element)
{
  return  '<'+element.type+'>'+element.props.className+' '+element.props.children+'<'+"/"+element.type+'>';
}
function App() {

  return (
    // fragmentation
    <>
      <div>
      concat(element)
        <p> </p>
      </div>
      <div>
        <h1>hello world</h1>
        <p> iusdhfn</p>
      </div>
    </>
    // <>sakdjaslkdjjasdkj</>
    // aliabb





  );
}

export default App;
