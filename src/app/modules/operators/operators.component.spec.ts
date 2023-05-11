import { TestBed } from '@angular/core/testing';
import { OperatorsComponent } from './operators.component';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { FeaturesProvider } from 'src/app/core/providers/features.provider';
import { SideNavService } from 'src/app/core/services/side-nav.service';

describe('OperatorsMainComponent', () => {
  const parentName = 'Operators';
  const sideNavFeatures = [ 'New Regulations', 'New Staff Members' ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        FeaturesProvider, SideNavService,
        OperatorsComponent
    ]
}).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(OperatorsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should pass properties to children properly', async () => {
  //   const parent = element(by.tagName('app-dashboard-main'));
  //   const heroes = parent.all(by.tagName('app-side-nav'));

  //   for (let i = 0; i < heroNames.length; i++) {
  //     const childTitle = await heroes.get(i).element(by.tagName('h3')).getText();
  //     const childDetail = await heroes.get(i).element(by.tagName('p')).getText();
  //     expect(childTitle).toEqual(heroNames[i] + ' says:');
  //     expect(childDetail).toContain(masterName);
  //   }
  // });

  // it('should display trimmed, non-empty names', async () => {
  //   const nonEmptyNameIndex = 0;
  //   const nonEmptyName = '"Dr. IQ"';
  //   const parent = element(by.tagName('app-name-parent'));
  //   const hero = parent.all(by.tagName('app-name-child')).get(nonEmptyNameIndex);

  //   const displayName = await hero.element(by.tagName('h3')).getText();
  //   expect(displayName).toEqual(nonEmptyName);
  // });

  // it('should replace empty name with default name', async () => {
  //   const emptyNameIndex = 1;
  //   const defaultName = '"<no name set>"';
  //   const parent = element(by.tagName('app-name-parent'));
  //   const hero = parent.all(by.tagName('app-name-child')).get(emptyNameIndex);

  //   const displayName = await hero.element(by.tagName('h3')).getText();
  //   expect(displayName).toEqual(defaultName);
  // });

  // Test must all execute in this exact order
// it('should set expected initial values', async () => {
//   const actual = await getActual();

//   const initialLabel = 'Version 1.23';
//   const initialLog = 'Initial value of major set to 1, Initial value of minor set to 23';

//   expect(actual.label).toBe(initialLabel);
//   expect(actual.count).toBe(1);
//   expect(await actual.logs.get(0).getText()).toBe(initialLog);
// });

// it("should set expected values after clicking 'Minor' twice", async () => {
//   const repoTag = element(by.tagName('app-version-parent'));
//   const newMinorButton = repoTag.all(by.tagName('button')).get(0);

//   await newMinorButton.click();
//   await newMinorButton.click();

//   const actual = await getActual();

//   const labelAfter2Minor = 'Version 1.25';
//   const logAfter2Minor = 'minor changed from 24 to 25';

//   expect(actual.label).toBe(labelAfter2Minor);
//   expect(actual.count).toBe(3);
//   expect(await actual.logs.get(2).getText()).toBe(logAfter2Minor);
// });

// it("should set expected values after clicking 'Major' once", async () => {
//   const repoTag = element(by.tagName('app-version-parent'));
//   const newMajorButton = repoTag.all(by.tagName('button')).get(1);

//   await newMajorButton.click();
//   const actual = await getActual();

//   const labelAfterMajor = 'Version 2.0';
//   const logAfterMajor = 'major changed from 1 to 2, minor changed from 23 to 0';

//   expect(actual.label).toBe(labelAfterMajor);
//   expect(actual.count).toBe(2);
//   expect(await actual.logs.get(1).getText()).toBe(logAfterMajor);
// });

// async function getActual() {
//   const versionTag = element(by.tagName('app-version-child'));
//   const label = await versionTag.element(by.tagName('h3')).getText();
//   const ul = versionTag.element((by.tagName('ul')));
//   const logs = ul.all(by.tagName('li'));

//   return {
//     label,
//     logs,
//     count: await logs.count(),
//   };
// }

// it('should not emit the event initially', async () => {
//   const voteLabel = element(by.tagName('app-vote-taker')).element(by.tagName('h3'));
//   expect(await voteLabel.getText()).toBe('Agree: 0, Disagree: 0');
// });

// it('should process Agree vote', async () => {
//   const voteLabel = element(by.tagName('app-vote-taker')).element(by.tagName('h3'));
//   const agreeButton1 = element.all(by.tagName('app-voter')).get(0)
//     .all(by.tagName('button')).get(0);

//   await agreeButton1.click();

//   expect(await voteLabel.getText()).toBe('Agree: 1, Disagree: 0');
// });

// it('should process Disagree vote', async () => {
//   const voteLabel = element(by.tagName('app-vote-taker')).element(by.tagName('h3'));
//   const agreeButton1 = element.all(by.tagName('app-voter')).get(1)
//     .all(by.tagName('button')).get(1);

//   await agreeButton1.click();

//   expect(await voteLabel.getText()).toBe('Agree: 0, Disagree: 1');
// });

});
