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
        <h1> {tweets.map((tweet) => (
            <Tweet name={tweet.name} tweet={tweet.tweet}/>
        ))} 
        </h1>
        
    </div>

)
}

export default Tweets;