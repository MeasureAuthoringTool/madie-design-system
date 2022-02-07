import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreChartComponent } from './score-chart.component';
import { By } from '@angular/platform-browser';

describe('ScoreChartComponent', (): void => {
  let fixture: ComponentFixture<ScoreChartComponent>;
  let component: ScoreChartComponent;

  function getElements() {
    return {
      full: fixture.debugElement.query(By.css('.cms-common-score-chart__full')),
      items: fixture.debugElement.queryAll(By.css('.cms-common-score-chart__item')),
    };
  }

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [ScoreChartComponent],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(ScoreChartComponent);
    component = fixture.componentInstance;
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  describe('building score chart', () => {
    it('should create correct elements', () => {
      component.data = {
        total: 100,
        items: [
          {
            color: 'rgb(0, 0, 255)',
            value: 10,
          },
          {
            color: 'rgb(255, 0, 0)',
            value: 20,
          },
        ],
      };
      fixture.detectChanges();
      const elements = getElements();

      expect(elements.full).toBeTruthy();
      expect(elements.items).toBeTruthy();
      expect(elements.items.length).toEqual(2);
    });

    it('should create correct elements when no items are provided', () => {
      component.data = { total: 100, items: [] };
      fixture.detectChanges();
      const elements = getElements();

      expect(elements.full).toBeTruthy();
      expect(elements.items).toBeTruthy();
      expect(elements.items.length).toEqual(0);
    });

    it('should create correct elements when no data is provided', () => {
      component.data = null;
      fixture.detectChanges();
      const elements = getElements();

      expect(elements.full).toBeTruthy();
      expect(elements.items).toBeTruthy();
      expect(elements.items.length).toEqual(0);
    });

    it('should build score chart correctly using defaults', () => {
      component.data = {
        total: 100,
        items: [
          {
            color: 'rgb(0, 0, 255)',
            value: 10,
          },
          {
            color: 'rgb(255, 0, 0)',
            value: 20,
          },
        ],
      };
      fixture.detectChanges();
      const elements = getElements();

      const fullStyle = (elements.full.nativeElement as HTMLElement).style;

      expect(fullStyle.height).toEqual('5px');
      expect(fullStyle.borderRadius).toEqual('2.5px');
      expect(fullStyle.backgroundColor).toEqual('rgb(236, 236, 236)');

      elements.items.forEach((item, i) => {
        const itemStyle = (item.nativeElement as HTMLElement).style;
        const itemData = component._data.items[i];

        expect(itemStyle.width).toEqual(`${(itemData.value / 100) * 100}%`);
        expect(itemStyle.backgroundColor).toEqual(itemData.color);
        expect(itemStyle.height).toEqual('5px');
        expect(itemStyle.borderLeftColor).toEqual('rgb(236, 236, 236)');
        expect(itemStyle.animationDuration).toEqual(`1500ms`);

        if (i === 0) {
          expect(itemStyle.borderRadius).toEqual('2.5px 0px 0px 2.5px');
        }

        if (i > 0) {
          expect(itemStyle.borderLeftWidth).toEqual('1px');
        }
      });
    });

    it('should build score chart correctly using custom options', () => {
      component.animationSpeed = 3000;
      component.backgroundColor = 'rgb(255, 255, 0)';
      component.borderRadius = 10;
      component.height = 20;
      component.itemSeparatorWidth = 5;
      component.width = 500;
      component.data = {
        total: 100,
        items: [
          {
            color: 'rgb(0, 0, 255)',
            value: 10,
          },
          {
            color: 'rgb(255, 0, 0)',
            value: 20,
          },
        ],
      };

      fixture.detectChanges();
      const elements = getElements();

      const fullStyle = (elements.full.nativeElement as HTMLElement).style;

      expect(fullStyle.width).toEqual('500px');
      expect(fullStyle.height).toEqual('20px');
      expect(fullStyle.borderRadius).toEqual('10px');
      expect(fullStyle.backgroundColor).toEqual('rgb(255, 255, 0)');

      elements.items.forEach((item, i) => {
        const itemStyle = (item.nativeElement as HTMLElement).style;
        const itemData = component._data.items[i];

        expect(itemStyle.width).toEqual(`${(itemData.value / 100) * 100}%`);
        expect(itemStyle.backgroundColor).toEqual(itemData.color);
        expect(itemStyle.height).toEqual('20px');
        expect(itemStyle.borderLeftColor).toEqual('rgb(255, 255, 0)');
        expect(itemStyle.animationDuration).toEqual(`3000ms`);

        if (i === 0) {
          expect(itemStyle.borderRadius).toEqual('10px 0px 0px 10px');
        } else {
          expect(itemStyle.borderRadius).toEqual('0px');
        }

        if (i > 0) {
          expect(itemStyle.borderLeftWidth).toEqual('5px');
        }
      });
    });

    it('should set border radius of last item if the cumulative sum equals the total', () => {
      component.borderRadius = 10;
      component.data = {
        total: 100,
        items: [
          {
            color: 'rgb(0, 0, 255)',
            value: 10,
          },
          {
            color: 'rgb(255, 0, 0)',
            value: 20,
          },
          {
            color: 'rgb(255, 255, 125)',
            value: 70,
          },
        ],
      };

      fixture.detectChanges();
      const elements = getElements();

      const itemStyle = (elements.items[2].nativeElement as HTMLElement).style;
      expect(itemStyle.borderRadius).toEqual('0px 10px 10px 0px');
    });

    it('should set border radius of last item if the cumulative sum is greater than the total', () => {
      component.borderRadius = 10;
      component.data = {
        total: 100,
        items: [
          {
            color: 'rgb(0, 0, 255)',
            value: 10,
          },
          {
            color: 'rgb(255, 0, 0)',
            value: 20,
          },
          {
            color: 'rgb(255, 255, 125)',
            value: 100,
          },
        ],
      };

      fixture.detectChanges();
      const elements = getElements();

      const itemStyle = (elements.items[2].nativeElement as HTMLElement).style;
      expect(itemStyle.borderRadius).toEqual('0px 10px 10px 0px');
    });
  });
});
