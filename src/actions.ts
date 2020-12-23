import * as Handlers from './handlers';

const actions: Record<
  string,
  {
    meta: {
      name: string;
      description: string;
      options?: {
        name: string;
        description: string;
        type: number;
        default: boolean;
        required: boolean;
        choices?: {
          name: string;
          value: string;
        }[];
      }[];
    };
    handler: (interaction: any, ctx: any) => any;
  }
> = Handlers;

export default actions;
