import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
		selector: 'app-stress',  // <stress></stress>
		templateUrl: './stress.component.html',
		changeDetection: ChangeDetectionStrategy.OnPush
})
export class StressComponent implements OnInit, OnDestroy {
	// Set our default values
	localState = { value: '' };
	sub: Subscription;
	initialQuantity: number = 0;

	constructor(public appState: AppState,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		// (+) converts string 'initialQuantity' to a number
		this.sub = this.route.queryParams.subscribe(
			(params: Params) => this.initialQuantity = +params['initialQuantity'] || 0
		);
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}

	submitState(value: string) {
		console.log('submitState', value);
		this.appState.set('value', value);
		this.localState.value = '';
	}
}
