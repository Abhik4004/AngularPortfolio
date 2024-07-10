import { Component } from '@angular/core';

@Component({
  selector: 'app-research-project',
  templateUrl: './research-project.component.html',
  styleUrl: './research-project.component.css',
})
export class ResearchProjectComponent {
  researches = [
    {
      title: 'Natural Language Processing',
      name: 'John Doe',
      link: 'https://example.com/research/nlp',
      imageUrl: 'https://example.com/images/nlp.jpg',
      description:
        'Exploring advanced techniques in natural language processing.',
    },
    {
      title: 'Machine Learning in Healthcare',
      name: 'Jane Smith',
      link: 'https://example.com/research/ml-healthcare',
      imageUrl: 'https://example.com/images/ml-healthcare.jpg',
      description:
        'Applying machine learning models to improve healthcare outcomes.',
    },
    {
      title: 'Robotics and Autonomous Systems',
      name: 'Michael Johnson',
      link: 'https://example.com/research/robotics',
      imageUrl: 'https://example.com/images/robotics.jpg',
      description:
        'Researching autonomous systems for various robotic applications.',
    },
    {
      title: 'Climate Change Modeling',
      name: 'Emily Brown',
      link: 'https://example.com/research/climate-change',
      imageUrl: 'https://example.com/images/climate-change.jpg',
      description:
        'Modeling climate change impacts using advanced simulation techniques.',
    },
    {
      title: 'Artificial Intelligence Ethics',
      name: 'David Wilson',
      link: 'https://example.com/research/ai-ethics',
      imageUrl: 'https://example.com/images/ai-ethics.jpg',
      description:
        'Investigating ethical implications of artificial intelligence technologies.',
    },
    {
      title: 'Data Privacy and Security',
      name: 'Sophia Lee',
      link: 'https://example.com/research/data-privacy',
      imageUrl: 'https://example.com/images/data-privacy.jpg',
      description:
        'Ensuring privacy and security in data-driven applications and systems.',
    },
    {
      title: 'Neural Networks in Finance',
      name: 'Andrew Carter',
      link: 'https://example.com/research/neural-networks-finance',
      imageUrl: 'https://example.com/images/neural-networks-finance.jpg',
      description:
        'Applying neural networks to predict financial market trends.',
    },
    {
      title: 'Bioinformatics and Genomics',
      name: 'Olivia Adams',
      link: 'https://example.com/research/bioinformatics',
      imageUrl: 'https://example.com/images/bioinformatics.jpg',
      description:
        'Analyzing genomic data using computational methods for bioinformatics.',
    },
    {
      title: 'Virtual Reality Applications',
      name: 'Daniel Brown',
      link: 'https://example.com/research/virtual-reality',
      imageUrl: 'https://example.com/images/virtual-reality.jpg',
      description:
        'Developing immersive virtual reality applications for various industries.',
    },
    {
      title: 'Renewable Energy Technologies',
      name: 'Sophie Wilson',
      link: 'https://example.com/research/renewable-energy',
      imageUrl: 'https://example.com/images/renewable-energy.jpg',
      description:
        'Researching innovative technologies for sustainable energy production.',
    },
  ];
}
