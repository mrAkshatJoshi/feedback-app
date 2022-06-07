npx create-react-app feedback-app --use-npm
npm i react-icons
npm install  uuid//for keys for addFeedback() in App.js
//we will use a library called Framer Motion for adding fading effect while adding and deleting feedback
//in the FeedbackList thats where we loop through and output each item
npm i framer-motion@4.1.17
//react does not have  router but we can install one
npm i react-router-dom
npm run build
npm i -g serve//install serve global
serve -s build

function App(){
    return React.createElement('div',{className : 'container'},React.createElement('h1',{ },'My App'))
}


function App(){
    const title = 'Blog post'
const body = 'this is my blogpost'
const comments = [
    {id:1, text:'comment one'},
    {id:2, text:'comment two'},
    {id:3, text:'comment three'}
]

    return (
        <div>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment,index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

insteadof passing props like this below
function Header(props) {
  return (
    <header>
        <div className="container">
            <h1>{props.text}</h1>
        </div>
    </header>
  )
}
you canpass by destructuring it and then access
function Header({text}) {
  return (
    <header>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}

if we do not declare props in the other with text="Feedback UI"
then  we can use defaultProps object
function Header({text}) {
  return (
    <header>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text:'Feedback UI'
}

for propTypes strict checking we use 
import PropTypes from 'prop-types'
Header.propTypes={
    text: PropTypes.string,
}
and if we declare props as text={true} it will givewarning in console that invalid propType as we have given
boolean but want string

applying style online
<header style={{backgroundColor:'blue', color: 'red'}}>

we can take a variable and do this also
const headerStyles ={
        backgroundColor:'blue', 
        color: 'red'
    }
  return <header style={headerStyles}>

we can pass these as props as well

