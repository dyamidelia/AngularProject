import { LeftNavigationModule } from './left-navigation.module';

describe('LeftNavigationModule', () => {
  let leftNavigationModule: LeftNavigationModule;

  beforeEach(() => {
    leftNavigationModule = new LeftNavigationModule();
  });

  it('should create an instance', () => {
    expect(leftNavigationModule).toBeTruthy();
  });
});
