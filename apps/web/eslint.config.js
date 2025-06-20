import { nextJsConfig } from '@jobPilot/eslint-config'

export default {
	...nextJsConfig,
  rules: {
    'react/jsx-key-props': 'off',
  }
}
