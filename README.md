
# Snake Game

My attempt at recreating the well-known game of Snake. The user controls a snake in a grid using the arrow keys. With each apple the snake eats, the more the snake grows and the score increases. When game ends, allows the user to immediately play again. The game also features the user to set the difficulty (changing the snake's speed) to however he or she prefers it.



![alt text](https://github.com/MatthewAu3/snake-game/blob/main/snake-game.png?raw=true)


## How it was made

**Languages Used:** HTML, CSS, Javascript

**Motivation:** The goal was to make a project based on a game. This would allow me to demonstrate my skills in not only critical thinking, but also being able to
display the logic on the screen while also accepting user input.

**Challenges Faced:** An initial hurdle I had to overcome was how to implement that growing snake. I had to come up with a way to have to expand from the tail. I also had to take into account that when the snake changes direction, not all the parts of the snake move in that same direction. The solution that I came up with and implemented is to
use a resizable array that adds a new body segment each time the snake eats an apple. Another issue was to deal with the snake changing directions. My initial approach was to just have all the body segments move in the same direction as the user input. However, I realized that this was not sufficient because of the complex nature of how the snake moves around the grid.
So the solution I came up with was to just move the head of the snake in the direction of the user input, but have the rest of the body segments move to where the previous part of the snake was.

**Lessons Learned** Through working on this project, I set up a stronger foundation for my HTML, CSS, and Javascript skills. The project placed a greater emphasis on my critical thinking and logic skills regarding how to implement the different aspects of the games such as the user input, snake movement, and snake growth. Overall, I believe that this project, while not the most complex from a technological standpoint, proved to be decently complex from a logical standpoint.
