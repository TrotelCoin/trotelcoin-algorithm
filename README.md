# trotelcoin-algorithm

This algorithm simulates a reward distribution system based on answering quizzes. Here's a breakdown of the steps:

**Function to Simulate Reward Distribution:** 
The `calculate_rewards` function calculates the reward for answering quizzes based on the number of remaining tokens. It generates a random reward within a certain range determined by the number of remaining tokens.

**Token Distribution Simulation:**
- `maximum_annual_distribution` represents the maximum annual distribution of tokens.
- `daily_tokens` calculates the number of tokens available per day based on the maximum annual distribution.
- `remaining_tokens` initializes the remaining tokens available for distribution.
- `total_rewards` keeps track of the total rewards distributed.

**Simulation of Rewards for Different Quizzes Answered:**
- The algorithm simulates rewards for different numbers of quizzes answered (from 1 to 1000 quizzes).
- It iterates through the range of quizzes answered, calculating rewards for each quiz and updating the total rewards and remaining tokens accordingly.

**Displaying Results:**
- It prints out the daily tokens, total rewards distributed, and the remaining tokens after the simulation.

**Plotting the Graph:**
- The algorithm plots a graph that visualizes the simulated rewards per quizzes answered. It shows the relationship between the number of quizzes answered and the rewards obtained in TrotelCoin currency.
