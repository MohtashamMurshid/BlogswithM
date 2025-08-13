---
layout: ../../layouts/MarkdownPostLayout.astro

title: What is Artificial Intelligence (AI)?
author: Mohtasham Murshid Madani
description: "AI is the broader field that encompasses the creation of machines or systems that can perform tasks typically requiring human intelligence. These tasks include recognizing speech, making decisions, understanding images, and even playing chess."

pubDate: "2022-07-08"
tags: ["astro", "blogging", "learning in public", "successes"]
department: Department of computer science
university: taylors university
email: contact@mohtasham.dev
---

# **1. What is Artificial Intelligence (AI)?**

Before we get into machine learning, we need to understand **Artificial Intelligence**. AI is the broader field that encompasses the creation of machines or systems that can perform tasks typically requiring human intelligence. These tasks include recognizing speech, making decisions, understanding images, and even playing chess.

### Two Categories of AI:

- **Narrow AI (Weak AI)**: This is where AI excels at one specific task. For example, a computer that can recommend movies based on your previous choices, or facial recognition on your phone.
- **General AI (Strong AI)**: This is the hypothetical future where machines could perform any task a human can do, with intelligence that matches human reasoning. We aren’t there yet, but it’s a goal that some researchers aim for.

# **2. What is Machine Learning (ML)?**

**Machine Learning** is a subset of AI. It’s all about teaching computers to learn from **data** and make decisions or predictions **without being explicitly programmed**.

Here’s the key idea:

- **Traditional programming**: We write rules and tell the computer exactly what to do.
- **Machine Learning**: We give the computer a lot of data, and it finds patterns to make decisions on its own.

**Example:** Imagine you want a computer to recognize cats in photos. Instead of programming specific rules (like “if there’s fur and whiskers, it’s a cat”), you provide the computer with thousands of cat images and non-cat images. The machine then learns the features (like fur, shape, ears, etc.) that make a cat a cat.

# **3. The Three Types of Machine Learning**

ML is typically categorized into three types based on the kind of data and tasks involved.

#### 1. **Supervised Learning**

This is the most common type. Here, the machine learns from **labeled data**—which means that every input (the data) comes with the correct output (the label).

- **Example**: Predicting house prices based on square footage, location, and number of rooms. You have data from houses (inputs) and their actual selling prices (labels).
- **Task**: The machine learns the relationship between house features and prices so that it can predict the price of new houses.

#### 2. **Unsupervised Learning**

In unsupervised learning, the machine gets **data without labels**. The goal is for it to find patterns, relationships, or groups within the data.

- **Example**: Customer segmentation in marketing. Given a dataset of customer behavior (age, shopping habits, etc.), the machine can group similar customers together.
- **Task**: It helps businesses target specific groups, like frequent shoppers or customers who only buy during sales.

#### 3. **Reinforcement Learning**

This is inspired by how humans and animals learn through trial and error. The machine interacts with an environment, makes decisions, and gets feedback in the form of rewards or punishments.

- **Example**: Training a robot to navigate a maze. If it reaches the goal, it gets a reward; if it hits a wall, it gets penalized. Over time, the robot learns the best path to the goal.
- **Task**: The system aims to maximize rewards by learning the best strategies over time.

### **4. How Do Machines Learn?**

Let’s simplify how a machine learning system works. The process generally involves:

1. **Data Collection**: Machines learn from data. The more diverse and relevant the data, the better the learning.
2. **Feature Extraction**: Machines focus on important characteristics (called features) from the data. For example, if the task is to predict house prices, features might include the number of rooms, location, and size.
3. **Training a Model**: The machine uses this data to build a mathematical model that predicts outcomes.
4. **Testing the Model**: After training, the model is tested on new, unseen data to see how well it performs.
5. **Making Predictions**: Finally, the trained model can make predictions or decisions on new data.

### **5. Key Concepts in Machine Learning**

Here are some important concepts you'll often hear about in ML:

- **Dataset**: The collection of data used for training and testing the model.
- **Model**: A mathematical representation of the data that the machine learns from.
- **Training**: The process where the machine learns from the data.
- **Overfitting**: When a model learns the training data too well, it performs poorly on new data because it memorizes specific examples rather than general patterns.
- **Accuracy**: A measure of how well the model predicts or classifies data correctly.

---

### **6. What is [[Deep Learning]] (DL)?**

Deep Learning is a specialized subset of machine learning. It’s based on **neural networks**, which are designed to mimic the structure of the human brain. The term "deep" refers to the multiple layers (hence the word "deep") of these neural networks.

While traditional ML algorithms might struggle with large amounts of data, **deep learning** can handle huge datasets and is especially good at tasks like:

- **Image recognition** (e.g., identifying faces in a photo),
- **Natural language processing** (e.g., translating languages),
- **Speech recognition** (e.g., voice assistants like Siri or Alexa).

#### [[Neural Networks]]:

Think of a neural network like a web of neurons in the human brain. Each neuron is responsible for processing a small piece of information, and as information flows through the network, the system makes decisions based on patterns learned during training.

### **7. Applications of AI, ML, and DL**

You’re already interacting with AI, ML, and DL technologies in daily life! Here are a few examples:

- **Voice Assistants** (e.g., Siri, Google Assistant): They use ML and DL to understand and respond to your commands.
- **Recommendation Systems** (e.g., Netflix, YouTube): They suggest content based on your viewing habits.
- **Self-Driving Cars**: These use reinforcement learning to navigate and make real-time decisions.
- **Healthcare**: AI is being used to detect diseases (like cancer) from medical images, predict patient outcomes, and suggest treatments.
- **Finance**: AI helps in fraud detection by learning patterns in financial transactions and flagging unusual activities.
