---
title: Publications
layout: default
---

## Selected Publications and Papers
  
### [Curriculum Learning in Reinforcement Learning for Multi-Step Manipulation Tasks]()
Faraz Heravi
*Master's thesis, advised by Dr. [Peter Stone](https://www.cs.utexas.edu/~pstone/), 2025*
<details>
  <summary>Abstract</summary>
  <p>Reinforcement learning (RL) has shown promise in robotic manipulation, yet multi-step tasks remain a persistent challenge due to sparse rewards and inefficient exploration. Multi-step manipulation tasks often require precise sequential interactions that are difficult for RL agents to learn effectively. To address this challenge, task decomposition has emerged as an effective strategy for improving learning in such settings. In this thesis, we explore two paradigms to address multi-step manipulation tasks in RL. First, we introduce a dense reward shaping framework that enables learning through carefully designed intermediate feedback. We extend this framework with a multi-policy architecture in which each policy is trained to solve a set of subtasks in sequence, allowing symbolic skills to build upon one another. Second, we explore curriculum learning within the task space by introducing parameterized goals that gradually increase in complexity. To support these paradigms, we present LIBERO+, an extension of the LIBERO benchmark that enables fine-grained task decomposition with hand-crafted dense rewards and the ability to parameterize goals. Recent advancements in large language models (LLMs) introduce new opportunities for task decomposition and curriculum generation, offering an alternative to the handcrafted reward structures. We propose LLM-Enhanced Automatic Curriculum Learning (LEACL), a framework that integrates LLM-based curriculum generation with automatic curriculum learning (ACL) techniques to automate task decomposition and curricula generation. We evaluate various baseline RL methods and our LEACL framework on five multi-step manipulation tasks of increasing difficulty. Our results demonstrate the potential of LLM-generated curricula in improving sample efficiency and solving sparse-reward manipulation tasks in robotics learning.
  </p>
</details>
  
### [Video Game Music Generation Using Recurrent Neural Network](https://github.com/fheravi/MusicGenerator/blob/master/White%20Paper.pdf) 
Faraz Heravi, Yousif Kako, Andrew Rosen
*2020*
<details>
  <summary>Abstract</summary>
  <p>Our goal is to be able to build a generative model from a Long-Short Term Memory (LSTM) in Recurrent Neural Networks. Previous work has been done using the same class of algorithms for different types of music such as classical music. Our approach was to perform music generation using LSTM on video game music. In particular, we tried to narrow our goal down to generate music given midi files from a speific video game.
  </p>
</details>