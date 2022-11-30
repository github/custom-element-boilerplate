import {generateCustomData} from 'cem-plugin-vs-code-custom-data-generator'
import {readme} from '@github/cem-plugin-readme'

export default {
  packagejson: true,
  globs: ['src/*-element.ts'],
  plugins: [readme(), generateCustomData()],
}
