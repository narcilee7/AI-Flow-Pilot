import { reactInternal} from "@jobPilot/eslint-config";

export default {
	...reactInternal,
  rules: {
    'react/jsx-key-props': 'off',
  }
}
