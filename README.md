# trotelcoin-algorithm

The TrotelCoin's algorithm simulates a reward distribution system based on answering quizzes. Here's a breakdown of the steps:

**Simulate the reward distribution:** 
The `calculate_rewards` function calculates the reward for answering quizzes based on the number of remaining tokens to manage inflation. It generates a random reward within a certain range determined by the number of remaining tokens.

**Token distribution simulation:**
- `maximum_annual_distribution` represents the maximum annual distribution of tokens.
- `daily_tokens` calculates the number of tokens available per day based on the maximum annual distribution.
- `remaining_tokens` initializes the remaining tokens available for distribution.
- `total_rewards` keeps track of the total rewards distributed.

**Simulation of rewards for different quizzes answered:**
- The algorithm simulates rewards for different numbers of quizzes answered (from 1 to 1000 quizzes).
- It iterates through the range of quizzes answered, calculating rewards for each quiz and updating the total rewards and remaining tokens accordingly.

**Displaying results:**
- It prints out the daily tokens, total rewards distributed, and the remaining tokens after the simulation.

**Plotting the graph:**
- The algorithm plots a graph that visualizes the simulated rewards per quizzes answered. It shows the relationship between the number of quizzes answered and the rewards obtained in TrotelCoin currency.

- ## License

This TrotelCoin repository is licensed under the [MIT License].

## Contribution

Feel free to participate in our open-source project. We are confident that collaborative efforts and open-source contributions can lead to significant achievements.
