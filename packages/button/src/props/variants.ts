import { colors } from './colors'

type ColorKey = keyof typeof colors

export const variants = {
  flat: (color: ColorKey) => {
    return `
      ${colors[color].flat.bg} 
      ${colors[color].flat.text}
      border-transparent
    `
  },

  outline: (color: ColorKey) => {
    return `
      bg-transparent 
      ${colors[color].outline.text} 
      border-2
      ${colors[color].outline.border}
    `
  },

  solid: (color: ColorKey) => {
    return `
      ${colors[color].solid.bg} 
      ${colors[color].solid.text} 
      border-transparent
    `
  }
}
