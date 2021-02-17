import { load } from "js-yaml"
import SimpleMarkdown from "simple-markdown"

const { defaultBlockParse: mdParse } = SimpleMarkdown

interface Markdown {
  meta: { [key: string]: any } | string | number
  contents: any[]
}

export const parseMarkdown = (text: string): Partial<Markdown> => {
  const parsedValue: Partial<Markdown> = {}
  const lines = text.split("\n").map((line) => line.trimRight())

  if (lines[0] == "---") {
    let meta_end: number

    for (let i = 1; i < lines.length; i++) {
      if (lines[i] == "---") {
        meta_end = i
      }
    }

    const metaString = lines.splice(1, meta_end - 1).join("\n")
    lines.splice(0, 2)

    const metaData = load(metaString)
    parsedValue.meta = metaData
  }

  let emptyLinesCounter = 0

  while (emptyLinesCounter < lines.length) {
    if (lines[emptyLinesCounter]) {
      break
    }

    emptyLinesCounter++
  }

  const contents = lines.slice(emptyLinesCounter).join("\n")
  parsedValue.contents = mdParse(contents)

  return parsedValue
}
