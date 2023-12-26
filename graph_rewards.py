import random
import matplotlib.pyplot as plt

# Function to simulate reward distribution
def calculate_rewards(remaining_tokens):
    min_reward = remaining_tokens // 10  # 10%
    max_reward = remaining_tokens // 4   # 25%
    return random.randint(int(min_reward), int(max_reward))

# Simulating rewards for different numbers of quizzes answered
maximum_annual_distribution = 1000000 * 1e18 # Maximum annual distribution
daily_tokens = maximum_annual_distribution // 365 # Daily tokens
remaining_tokens = daily_tokens / 50 # Remaining tokens
total_rewards = 0 # Total rewards

# Simulating rewards for different numbers of quizzes answered
quizzes_answered = list(range(1, 1001))  # Simulation for 100 quizzes
rewards = []

for quizzes in quizzes_answered:
    reward = calculate_rewards(remaining_tokens)
    rewards.append(reward)
    total_rewards += reward
    remaining_tokens -= reward / 50

# Displaying the results
print("Daily Tokens:", daily_tokens * 1e-18)
print("Total Rewards:", total_rewards * 1e-18)
print("Remaining Tokens:", remaining_tokens * 1e-18)

# Plotting the graph
plt.plot(quizzes_answered, [reward * 1e-18 for reward in rewards], linestyle='-', color='b')
plt.title('Simulated Rewards per Quizzes Answered')
plt.xlabel('Number of quizzes answered in a day')
plt.ylabel('Simulated Rewards in TrotelCoin')
plt.grid(True)
plt.tight_layout()

# Displaying the graph
plt.show()
