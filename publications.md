---
title: Publications
layout: default
---

## Selected Publications and Papers

### [Spinel: A Post-Quantum Signature Scheme Based on SLn(𝔽p)](https://arxiv.org/abs/2602.09882)
Asmaa Cherkaoui, Faraz Heravi, Delaram Kahrobaei, Siamak F. Shahandashti.
2026.
<details>
  <summary>Abstract</summary>
  <p>The advent of quantum computation compels the cryptographic community to design digital signature schemes whose security extends beyond the classical hardness assumptions. In this work, we introduce Spinel, a post-quantum digital signature scheme that combines the proven security of SPHINCS+ (CCS 2019) with a new family of algebraic hash functions (Adv. Math. Commun. 2025) derived from the Tillich-Zemor paradigm (Eurocrypt 2008) with security rooted in the hardness of navigating expander graphs over SLn(𝔽p), a problem believed to be hard even for quantum adversaries. We first provide empirical evidence of the security of this hash function, complementing the original theoretical analysis. We then show how the hash function can be integrated within the SPHINCS+ framework to give a secure signature scheme. We then model and analyze the security degradation of the proposed scheme, which informs the parameter selection we discuss next. Finally, we provide an implementation of the hash function and the proposed signature scheme Spinel as well as detailed empirical results for the performance of Spinel showing its feasibility in practice. Our approach lays the foundations for the design of algebraic hash-based signature schemes, expanding the toolkit of post-quantum cryptography.
  </p>
</details>

### [LEACL: LLM-Enhanced Automatic Curriculum Learning for Reinforcement Learning in Long-Horizon Manipulation Tasks](https://arxiv.org/abs/2607.23515)
Faraz Heravi, James Ouyang, Zifan Xu, Arjun Kumar, Yoonchang Sung, Peter Stone.
In The *IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)*, 2026.
<details>
  <summary>Abstract</summary>
  <p>Long-horizon manipulation tasks pose significant challenges for reinforcement learning due to sparse reward signals and long horizons. Automatic curriculum learning (ACL) has been proposed to tackle these challenges by progressively training agents on a sequence of tasks, from easier to more difficult. However, the success of ACL depends heavily on task-dependent specifications-such as well-defined task parameter spaces and difficulty measures-which are often manually crafted and difficult to generalize across diverse tasks. Recent advances in large language models (LLMs) offer a promising alternative by enabling the decomposition of complex tasks into meaningful subtasks using the LLMs' web-scale common-sense knowledge. This decomposition can provide a natural curriculum structure for efficient learning of long-horizon tasks. However, existing LLM-based methods typically rely on hand-designed dense reward functions to learn each subtask, which can introduce bias and still requires significant human supervision.
In this work, we propose LLM-enhanced automatic curriculum learning (LEACL), a framework that integrates LLMs and ACL to address these limitations. Specifically, LLMs are used to both decompose tasks into subtasks and to generate task-dependent specifications for each subtask. These specifications are then used by ACL algorithms to guide learning using only sparse reward signals, eliminating the need for dense reward design. We evaluate LEACL on five long-horizon manipulation tasks from the LIBERO benchmark. LEACL achieves better asymptotic performance in terms of the success rates compared to human-designed dense rewards.
  </p>
</details>

### [Curriculum Learning in Reinforcement Learning for Multi-Step Manipulation Tasks](https://repositories.lib.utexas.edu/items/d2251975-b0b3-44a1-aaad-6953ebe46387)
Faraz Heravi  
*Master's thesis*, advised by Dr. [Peter Stone](https://www.cs.utexas.edu/~pstone/), 2025.
<details>
  <summary>Abstract</summary>
  <p>Reinforcement learning (RL) has shown promise in robotic manipulation, yet multi-step tasks remain a persistent challenge due to sparse rewards and inefficient exploration. Multi-step manipulation tasks often require precise sequential interactions that are difficult for RL agents to learn effectively. To address this challenge, task decomposition has emerged as an effective strategy for improving learning in such settings. In this thesis, we explore two paradigms to address multi-step manipulation tasks in RL. First, we introduce a dense reward shaping framework that enables learning through carefully designed intermediate feedback. We extend this framework with a multi-policy architecture in which each policy is trained to solve a set of subtasks in sequence, allowing symbolic skills to build upon one another. Second, we explore curriculum learning within the task space by introducing parameterized goals that gradually increase in complexity. To support these paradigms, we present LIBERO+, an extension of the LIBERO benchmark that enables fine-grained task decomposition with hand-crafted dense rewards and the ability to parameterize goals. Recent advancements in large language models (LLMs) introduce new opportunities for task decomposition and curriculum generation, offering an alternative to the handcrafted reward structures. We propose LLM-Enhanced Automatic Curriculum Learning (LEACL), a framework that integrates LLM-based curriculum generation with automatic curriculum learning (ACL) techniques to automate task decomposition and curricula generation. We evaluate various baseline RL methods and our LEACL framework on five multi-step manipulation tasks of increasing difficulty. Our results demonstrate the potential of LLM-generated curricula in improving sample efficiency and solving sparse-reward manipulation tasks in robotics learning.
  </p>
</details>
  
### [Video Game Music Generation Using Recurrent Neural Network](https://github.com/fheravi/MusicGenerator/blob/master/White%20Paper.pdf) 
Faraz Heravi, Yousif Kako, Andrew Rosen  
*Undergraduate thesis*, advised by Dr. Rosen. 2020.
<details>
  <summary>Abstract</summary>
  <p>Our goal is to be able to build a generative model from a Long-Short Term Memory (LSTM) in Recurrent Neural Networks. Previous work has been done using the same class of algorithms for different types of music such as classical music. Our approach was to perform music generation using LSTM on video game music. In particular, we tried to narrow our goal down to generate music given midi files from a speific video game.
  </p>
</details>
