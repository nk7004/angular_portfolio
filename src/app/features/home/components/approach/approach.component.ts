import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../../../data/portfolio.data';
import { EngineeringStep } from '../../../../core/models/portfolio.model';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approach.component.html',
  styleUrl: './approach.component.scss'
})
export class ApproachComponent {
  steps: EngineeringStep[] = PORTFOLIO_DATA.engineeringApproach;
}
