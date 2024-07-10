import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-expertise',
  templateUrl: './skills-expertise.component.html',
  styleUrl: './skills-expertise.component.css',
})
export class SkillsExpertiseComponent {
  skills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'],
      description:
        'Proficient in various programming languages used for web development, data analysis, and machine learning applications.',
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React.js', 'Angular', 'Node.js', 'TensorFlow', 'PyTorch'],
      description:
        'Experienced in popular frameworks and libraries for frontend development, backend development, and deep learning models.',
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'AWS', 'SQL', 'RESTful APIs'],
      description:
        'Skilled in tools and technologies essential for version control, containerization, cloud computing, database management, and API development.',
    },
    {
      category: 'Skills',
      items: [
        'Machine Learning',
        'Natural Language Processing',
        'Data Visualization',
        'Software Development',
        'Problem Solving',
      ],
      description:
        'Strong capabilities in machine learning algorithms, text processing, data visualization techniques, software engineering best practices, and analytical problem-solving.',
    },
  ];
}
