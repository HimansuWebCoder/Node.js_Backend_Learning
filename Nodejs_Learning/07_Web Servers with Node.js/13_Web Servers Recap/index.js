// Recap all the code and server
/* To recap, we've learned how to create our first HTTP server taht handles incoming
// requests and response to them by using the two streams. That node makes available for us in the request 
and response objects. We have learned how to handle different types of requests by looking at the method
& the URL of the incoming requests. And we've seen how to set the status code, the headers and even write some HTML.
But we've been writing code as if we were the first developers ever to work with node. We've been doing thigs the hard way 
without taking advantage of any of the work that the node community has done to make our life easier, especially for when
our server gets even more complicated. Working with different types of data, say forms and large files or social authentication
with sites like google, maybe more advanced URL parameters that require more robust handling that what we've done here
In order to support any type of application that node could possibly be used for the node developers had to make the HTTP API very low level.
It just gives us these two streams & does some very basic parsing on them to split a request & the response just then into the headers and whatever we pass into the body.
If we want to focus on the code for our applications, it makes sense to use a pre-built framework that gives us a little more functionality out of the box
so we don't have to recreate it ourselves. The good news is that there is a massive community of developers who have been using node for years.
and they've built tools that we can use to make our lives easier. We're going to be looking at frameworks that can save us from making the mistakes that we made in this 
video ,and they'll allow us to make applications that are much powerful and comparable to what we would do in a large organization like say, NASA.
Generally, when we use frameworks to do something, the initial learning curve is a little higher.
But we get so much more functionality and power as a reward. But honestly, to understand things best, it helps to have done things without a frameworks first.
And then to understand the power that the framework is giving you. And to understand what's happening behind the scenes. That's one of the biggest differences 
b/w a senior developer & a junior developer.
It's that deeper understanding of how things work & why.
Knowing these details allows you to make better decisions when it comes to solving the difficult problems that come up when you're working on interesting products 
in a team of developers.

*/