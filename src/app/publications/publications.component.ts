import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css',
})
export class PublicationsComponent {
  publications = [
    {
      title: 'Machine Learning Techniques for Healthcare Applications',
      authors: 'John Doe, Jane Smith',
      journal: 'Journal of Medical AI',
      year: 2023,
      link: 'https://example.com/publications/ml-healthcare',
    },
    {
      title: 'Natural Language Processing Advances: A Comprehensive Review',
      authors: 'Emily Brown, Michael Johnson',
      journal: 'IEEE Transactions on NLP',
      year: 2022,
      link: 'https://example.com/publications/nlp-advances',
    },
    {
      title: 'Ethical Considerations in AI Development',
      authors: 'David Wilson, Sophia Lee',
      journal: 'Ethics in Technology',
      year: 2024,
      link: 'https://example.com/publications/ai-ethics',
    },
    // Add more publications as needed
  ];
}
