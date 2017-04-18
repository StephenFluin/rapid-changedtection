import {
	Component,
	Input,
	OnInit,
	OnDestroy,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	NgZone
} from "@angular/core";
import { PriceService } from "../price.service";
import { Subscription } from "rxjs";
import { TileModel } from "../price.model";
import "rxjs/add/operator/timeInterval";
// DO NOT DO THIS IN ANY CIRCUMSTANCE
import { Observable } from "rxjs";


@Component({
	selector: 'self-tile',
	templateUrl: './selftile.component.html',
	styleUrls: ['./selftile.component.css'],
	// this doesn't matter because we are detached
	//changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelfTileComponent implements OnInit {
	private tileSubscription: Subscription;
	@Input() model: TileModel;
	public interval: number;

	price;

	
	public evilFastThing =  Observable.interval(50).map(() => Math.random());

	constructor(private priceService: PriceService, private cd: ChangeDetectorRef,
		private zone: NgZone) {
		cd.detach();
		console.log("Constructed tile.");


	}

	ngOnInit() {
		// console.log('Tile component created for tileId = ' + this.model.tileId);
		let start;
		let end;
		//this.zone.runOutsideAngular(() => {
			this.tileSubscription = this.evilFastThing.subscribe(next => {
				this.price = next;
				// run change detection for this child and all children
				// start = performance.now();
				this.cd.detectChanges();
				// end = performance.now();
				// console.log("took:",end-start);
			})
		//});
	}

	ngOnDestroy() {
		this.tileSubscription.unsubscribe();
	}


}
