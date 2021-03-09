import React from "react" 
import Tweet from "./Tweet"

const Tweets = (props) => {
    const tweets = [
        {
            name: 'hanny',
            tweet: 'tweet'
        },
        {
            name: 'blarg',
            tweet: 'beep bop'
        },
        {
            name: 'sharkbait',
            tweet: 'oohaha'
        }
    ]
return (
    <div>
        <h1>Hello</h1>
        <Tweet />
    </div>

)
}

export default Tweet;