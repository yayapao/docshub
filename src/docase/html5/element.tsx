import React from 'react'

export const FieldsetCase = () => (
  <fieldset>
    <legend>Hello world form title!</legend>
    <input type="radio" id="kraken" name="monster" />
    <label htmlFor="kraken">Kraken</label>
  </fieldset>
)

export const FigureCase = ({ type }: { type: 'code' | 'quote' }) => {
  if (type === 'code') {
    return (
      <figure>
        <figcaption>Figure Element!</figcaption>
        <code>hello world!</code>
        <pre>let me = 'like 77!'</pre>
      </figure>
    )
  }
  return (
    <figure>
      <figcaption>
        <cite>Hello World!</cite>
      </figcaption>
      <blockquote>Why so serious?</blockquote>
    </figure>
  )
}
