import type { Answers } from 'inquirer';
import { runViteWizard } from '../../../src/plugin/vite/plugin-wizard';

import type { Args } from '../../Constants';
import { BaseIntegration } from './BaseIntegration';

/**
 * This class just redirects to the new `sveltekit-wizard.ts` flow
 * for anyone calling the wizard without the '-i sveltekit' flag.
 */
export class Vite extends BaseIntegration {
  public constructor(protected _argv: Args) {
    super(_argv);
  }

  public async emit(_answers: Answers): Promise<Answers> {
    await runViteWizard({ promoCode: this._argv.promoCode });
    return {};
  }

  public async shouldConfigure(_answers: Answers): Promise<Answers> {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if (this._shouldConfigure) {
      return this._shouldConfigure;
    }
    // eslint-disable-next-line @typescript-eslint/unbound-method
    return this.shouldConfigure;
  }
}
