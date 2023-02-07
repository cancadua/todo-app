import React, { useCallback, useRef, useState } from "react"
import { HexColorPicker } from "react-colorful"
import Modal from "react-modal"

import useClickOutside from "./useClickOutside"

const ColorPicker = ({ color, onChange, presetColors }) => {
  const popover = useRef()
  const [isOpen, toggle] = useState(false)

  const close = useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />
      <Modal
            ariaHideApp={false}
            className='fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-xl flex flex-col bg-white'
            overlayClassName='fixed inset-0 bg-black/60 z-30'
            isOpen={isOpen}
            onRequestClose={() => toggle(false)}>
          <HexColorPicker color={color} onChange={onChange} />
          <div className="picker__swatches">
            {presetColors.map((presetColor) => (
              <button
                key={presetColor}
                className="picker__swatch"
                style={{ backgroundColor: presetColor }}
                onClick={() => onChange(presetColor)}
              />
            ))}
        </div>
      </Modal>

    </div>
  )
}
export default ColorPicker