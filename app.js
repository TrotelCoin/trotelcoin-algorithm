function TrotelCoinSimulator(
  totalSupply,
  initialRate,
  inflationLimit,
  maximumAnnualDistribution
) {
  // Class properties
  this.totalSupply = totalSupply;
  this.currentRate = initialRate;
  this.inflationLimit = inflationLimit;
  this.maximumAnnualDistribution = maximumAnnualDistribution;
  this.dailyQuizzesAnswered = [];
  this.daysElapsed = 0;
  this.rewardHistory = [];
  this.totalTokensDistributedPerDay = [];

  // Method to simulate two years of activity
  this.simulateTwoYears = function () {
    const initialQuizzesAnswered = 1;
    const finalQuizzesAnswered = 100000;

    const growthRate = Math.pow(
      finalQuizzesAnswered / initialQuizzesAnswered,
      1 / (2 * 365)
    );

    let currentQuizzesCount = initialQuizzesAnswered;

    for (let i = 0; i < 2 * 365; i++) {
      this.dailyQuizzesAnswered.push(Math.floor(currentQuizzesCount));

      const tokensToDistribute =
        this.calculateTokensToDistribute(currentQuizzesCount);
      this.rewardHistory.push(tokensToDistribute);

      this.daysElapsed++;
      currentQuizzesCount *= growthRate;
    }

    this.calculateTotalTokensDistributedPerDay();
  };

  // Method to calculate tokens to distribute based on quizzes answered
  this.calculateTokensToDistribute = function (currentQuizzesCount) {
    const annualTokensToDistribute = this.maximumAnnualDistribution;
    const dailyTokensToDistribute = annualTokensToDistribute / 365;

    const tokensPerQuiz = dailyTokensToDistribute / currentQuizzesCount;
    return tokensPerQuiz;
  };

  // Method to calculate the total tokens distributed per day
  this.calculateTotalTokensDistributedPerDay = function () {
    for (let i = 0; i < this.daysElapsed; i++) {
      const tokensDistributed =
        this.rewardHistory[i] * this.dailyQuizzesAnswered[i];
      this.totalTokensDistributedPerDay.push(tokensDistributed);
    }
  };

  // Method to visualize token rewards per user evolution
  this.visualizeTokenRewardsPerUser = function (xAxisData, rewardHistory) {
    const chartElement = document.getElementById("tokenRewardsContainer");

    const chart = echarts.init(chartElement);

    chart.setOption({
      title: {
        text: `Token rewards per user`,
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
        name: "Days",
      },
      yAxis: {
        type: "value",
        name: "Token rewards per user",
      },
      series: [
        {
          type: "line",
          data: rewardHistory,
          areaStyle: {},
          name: "Token rewards per user",
        },
      ],
    });
  };

  // Method to visualize quizzes answered evolution
  this.visualizeQuizzesAnswered = function (xAxisData, participantHistory) {
    const chartElement = document.getElementById("quizzesAnsweredContainer");

    const chart = echarts.init(chartElement);

    chart.setOption({
      title: {
        text: `Quizzes answered evolution`,
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
        name: "Days",
      },
      yAxis: {
        type: "value",
        name: "Number of quizzes answered",
      },
      series: [
        {
          type: "line",
          data: participantHistory,
          areaStyle: {},
          name: "Number of quizzes answered",
        },
      ],
    });
  };

  // Method to visualize total tokens distributed per day evolution
  this.visualizeTotalTokensDistributed = function (xAxisData) {
    const chartElement = document.getElementById("totalTokensDistributedContainer");

    const chart = echarts.init(chartElement);

    chart.setOption({
      title: {
        text: `Total tokens distributed per day`,
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
        name: "Days",
      },
      yAxis: {
        type: "value",
        name: "Total tokens distributed",
      },
      series: [
        {
          type: "line",
          data: this.totalTokensDistributedPerDay,
          areaStyle: {},
          name: "Total Tokens Distributed",
        },
      ],
    });
  };
}

function performSimulation() {
  const totalSupply = 100000000; // Example total supply
  const initialRate = 1.0; // Example initial rate
  const inflationLimit = 1.0; // Example inflation limit
  const maximumAnnualDistribution = 1000000; // 1 million TROTEL tokens per year

  const simulator = new TrotelCoinSimulator(
    totalSupply,
    initialRate,
    inflationLimit,
    maximumAnnualDistribution
  );

  simulator.simulateTwoYears();

  const xAxisData = Array.from({ length: simulator.daysElapsed }, (_, j) =>
    (j + 1).toString()
  );

  // Display separate charts for each metric
  simulator.visualizeTokenRewardsPerUser(xAxisData, simulator.rewardHistory);
  simulator.visualizeQuizzesAnswered(xAxisData, simulator.dailyQuizzesAnswered);
  simulator.visualizeTotalTokensDistributed(xAxisData);
}

performSimulation();
