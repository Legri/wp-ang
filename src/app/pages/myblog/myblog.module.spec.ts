import { MyblogModule } from './myblog.module';

describe('MyblogModule', () => {
  let myblogModule: MyblogModule;

  beforeEach(() => {
    myblogModule = new MyblogModule();
  });

  it('should create an instance', () => {
    expect(myblogModule).toBeTruthy();
  });
});
