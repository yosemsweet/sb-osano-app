import { component, Schema } from 'ub-shared';

import Osano from './components/osano';
import { migrations } from './migrations';

const schema = Schema.object({
  id: Schema.string().noControls(),
});

export const Component = component({
  componentTypeId: 'osano', // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: 'Osano Cookie Consent Management',
  tags: ['head-script'],
  schema: schema.noControls(),
  Component: Osano,
  version: migrations.length,
  migrations: migrations,
});
