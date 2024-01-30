import { Component, OnInit } from '@angular/core';
import { Car } from './domain/car';
import { CarService } from './services/carservice';
declare let $: any;

@Component({
  selector: 'table-scroll-demo',
  templateUrl: './table-scroll-demo.component.html',
  providers: [CarService]
})
export class TableScrollDemo implements OnInit {

  cars: Car[];

  frozenCols: any[];

  scrollableCols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
      this.makeRowsSameHeight()
    });

    this.scrollableCols = [

      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.frozenCols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' }
    ];
  }


  makeRowsSameHeight() {
    setTimeout(() => {
      if ($('.ui-table-scrollable-wrapper').length) {
        let wrapper = $('.ui-table-scrollable-wrapper');
        wrapper.each(function () {
          let w = $(this);
          let frozen_rows: any = w.find('.ui-table-frozen-view tr');
          let unfrozen_rows = w.find('.ui-table-unfrozen-view tr');
          for (let i = 0; i < frozen_rows.length; i++) {
            if (frozen_rows.eq(i).height() > unfrozen_rows.eq(i).height()) {
              unfrozen_rows.eq(i).height(frozen_rows.eq(i).height());
            } else if (frozen_rows.eq(i).height() < unfrozen_rows.eq(i).height()) {
              frozen_rows.eq(i).height(unfrozen_rows.eq(i).height());
            }
          }
        });
      }
    });
  }

}
